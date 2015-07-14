<?
namespace Cliqr;

require_once "lib/vote/Vote.class.php";
require_once "lib/classes/DBManager.class.php";
require_once "errors.php";

class Question extends \Vote {

    static function find($id)
    {
        $question = new Question($id);
        if ($question->isError()) {
            throw new RecordNotFound();
        }
        return $question;
    }

    static function findAll($range_id)
    {
        $_range_id = self::transformRangeId($range_id);

        // get a list of all active questions
        $voteDb = new \VoteDB();
        $questions = array_merge(
            $voteDb->getNewVotes($_range_id),
            $voteDb->getActiveVotes($_range_id),
            $voteDb->getStoppedVotes($_range_id));

        foreach($questions as $index => &$question) {
            $questions[$index] = new Question($question["voteID"]);
        }

        // order questions by title
        usort($questions, function($a, $b) {
                return strcasecmp($a->title, $b->title);
         });
        return $questions;
    }

    static function findAllActive($range_id)
    {
        return self::_findAllActive(self::transformRangeId($range_id));
    }

    static private function _findAllActive($_range_id)
    {
        # get a list of all active questions
        $voteDb = new \VoteDB();
        $questions = $voteDb->getActiveVotes($_range_id);

        # inflate
        $questions = array_map(
            function ($q) {
                return new Question($q["voteID"]);
            },
            $questions);

        # order by startdate
        usort($questions, function($a, $b) {
                if ($a->startdate === $b->startdate) { return 0; }
                return $a->startdate < $b->startdate ? -1 : +1;
            });

        return $questions;
    }

    static function consolidateState($range_id)
    {
        $_range_id = self::transformRangeId($range_id);

        $voteDb = new \VoteDB();
        $voteDb->startWaitingVotes($_range_id);
    }

    static function transformRangeId($range_id)
    {
        return md5("cliqr-$range_id");
    }


    static function makeChoices($choices)
    {
        # reject empty
        $choices = array_filter($choices, function ($choice) { return strlen($choice); });

        foreach ($choices as &$choice) {
            $choice = self::makeChoice($choice);
        }

        return $choices;
    }

    static function makeChoice($choice)
    {
        return array(
            'answer_id' => md5(uniqid(rand())),
            'text'      => $choice,
            'counter'   => 0,
            'correct'   => 0);
    }
	
	/*
	* This method adds a new question to the database. 
	* param: data - fields to add to the db
	*/
	static function insertNewQuestion($data)
	{		
		$new_vote_id = md5(uniqid(rand()));
		
		$sql = "INSERT INTO vote (vote_id, author_id, range_id, title, question, state, multiplechoice, anonymous, changeable, resultvisibility, mkdate, chdate) ".
			   "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		$stmt = \DBManager::get()->prepare($sql);
		
		$stmt->execute(
			array( $new_vote_id , $data['author_id'], self::transformRangeId($data['range_id']), $data['title'], $data['question'], 'new', $data['multiplechoice'], $data['anonymous'], $data['changeable'], 'delivery', $data['mkdate'], $data['chdate']));
 
		$position_counter = 0;
		foreach ($data['answers'] as $a) 
		{
			$new_answer_id = md5(uniqid(rand()));
			
			$sql = "INSERT INTO voteanswers (answer_id, vote_id, answer, position, correct) ".
			   "VALUES (?, ?, ?, ?, ?)";
			$stm = \DBManager::get()->prepare($sql);
			$stm->execute( array( $new_answer_id, $new_vote_id, $a->text, $position_counter, $a->correct ) );
			
			$position_counter++;
		} 
		return $stmt;	
	}
	
	/*
	* This method gets the VeranstaltungName from the db
	* param: veranstaltung_id
	*/
	public static function getVeranstaltungName($veranstaltung_id)
	{	
		$dbquery = "SELECT Name FROM seminare WHERE Seminar_id = ?";
		$db = \DBManager::get()->prepare($dbquery);
		$db->execute(array($veranstaltung_id));
		$row = $db->fetch(\PDO::FETCH_ASSOC);
		return $row['Name'];
	}
	
	/*
	* This method deletes all the questions in db	
	*/
	public static function deleteAllQuestions($seminar_id)
	{	
		$questions = Question::findAll($seminar_id);
		
		foreach($questions as $q)
		{
			$query = "DELETE FROM vote WHERE vote_id = ?";
			$st = \DBManager::get()->prepare($query); 
			$st->execute(array($q->objectID));
									
			$query = "DELETE FROM votehistory WHERE vote_id = ?";
			$st = \DBManager::get()->prepare($query); 
			$st->execute(array($q->objectID));
			
			$query = "DELETE FROM voteanswers WHERE vote_id = ?";
			$st = \DBManager::get()->prepare($query); 
			$st->execute(array($q->objectID));
		}		
				
		return '<b>Hervorragend!</b> Die Frage(n) wurde(n) erfolgreich <b>gel�scht</b>.';
	}

    /********************/
    /* INSTANCE METHODS */
    /********************/
    function isActiveIn($range_id)
    {
        $_range_id = self::transformRangeId($range_id);
        return $this->rangeID === $_range_id && $this->isActive();
    }
	
     /**
     * Deletes the vote history from the DB
     *
     * @access  public
     * @param   string   $voteID   The specified voteID
     */
    function removeHistory($voteID)
    {
        $query="DELETE FROM votehistory WHERE vote_id = ?";
        $statement = \DBManager::get()->prepare($query);
        $statement->execute(array($voteID));
		
		$query="UPDATE voteanswers SET counter = 0 WHERE vote_id = ?";
        $statement = \DBManager::get()->prepare($query);
        $statement->execute(array($voteID));
   }
   
   /**
     * Deletes the old vote history from the DB
     *
     * @access  public
     * @param   string   $voteID   The specified voteID
     */ 
    function removeOldHistory($voteID, $Durchgangsanzahl)
    {
        $query="SELECT DISTINCT startdate FROM votehistory WHERE vote_id = ?";
        $statement = \DBManager::get()->prepare($query);
        $statement->execute(array($voteID));

		while ($statement->rowCount() > $Durchgangsanzahl) {
		
			$query="SELECT MIN(startdate) AS startdate FROM votehistory WHERE vote_id = ?";
			$statement = \DBManager::get()->prepare($query);
			$statement->execute(array($voteID));
			$result = $statement->fetch(\PDO::FETCH_ASSOC);
			
			$query="DELETE FROM votehistory WHERE vote_id = ? AND startdate = ?";
			$statement2 = \DBManager::get()->prepare($query);
			$statement2->execute(array($voteID, $result['startdate']));
			
			$query="SELECT DISTINCT startdate FROM votehistory WHERE vote_id = ?";
			$statement = \DBManager::get()->prepare($query);
			$statement->execute(array($voteID));
		}
   }
   
	/**
    * Removes the vote history from the database (!)
    * @access  public
    * @throws  error
    */
   function executeResetHistory () {

      $this->removeHistory ($this->objectID);
      if ($this->voteDB->isError ())
     $this->throwErrorFromClass ($this->voteDB);
   }
   
   /**
    * Removes the old vote history from the database (!)
    * @access  public
    * @throws  error
    */
   function executeRemoveOldHistory ($Durchgangsanzahl) {

      $this->removeOldHistory ($this->objectID, $Durchgangsanzahl);
      if ($this->voteDB->isError ())
		$this->throwErrorFromClass ($this->voteDB);
   }

    function recordAnswer($answer_id)
    {
	
        if (!$this->isActive()) {
            $this->throwError(23, _("Nur aktive Fragen k�nnen beantwortet werden."));
            return false;
        }

        $sql = "UPDATE voteanswers SET counter = counter + 1 ".
               "WHERE vote_id = ? AND answer_id = ?";
        $stmt = \DBManager::get()->prepare($sql);
        $stmt->execute(array($this->getVoteID(), $answer_id));

        if ($stmt->rowCount() !== 1) {
            $this->throwError(24, _("Antwort wurde nicht gespeichert."));
            return false;
        }

        # update locally
        foreach ($this->answerArray as &$answer) {
            if ($answer['answer_id'] === $answer_id) {
                $answer['counter']++;
            }
        }


		$sql = "SELECT history_id FROM votehistory JOIN vote ON vote.vote_id = votehistory.vote_id ".
			   "JOIN voteanswers ON votehistory.answer = voteanswers.answer ".
			   "WHERE votehistory.vote_id = ? AND vote.startdate = votehistory.startdate AND answer_id = ?";
        $stmt = \DBManager::get()->prepare($sql);
        $stmt->execute(array($this->getVoteID(), $answer_id));
		
		if ($stmt->rowCount() == 0) {
		
			$sql = "SELECT startdate, answer, counter, position FROM voteanswers JOIN vote ON vote.vote_id = voteanswers.vote_id ".
				   "WHERE voteanswers.vote_id = ?";
			$stmt = \DBManager::get()->prepare($sql);
			$stmt->execute(array($this->getVoteID()));
			
			foreach($stmt as $row)
			{
				
				$history_id = md5(uniqid(rand()));	
				
				$sql = "INSERT INTO votehistory (history_id, startdate, vote_id, answer, counter, position) ".
					   "VALUES (?, ?, ?, ?, ?, ?)";
				$stmt = \DBManager::get()->prepare($sql);
				$stmt->execute(array($history_id, $row['startdate'], $this->getVoteID(), $row['answer'], $row['counter'], $row['position']));
			}
		
		}
		else{
		
			foreach($stmt as $row)
			{
				$sql = "UPDATE votehistory SET counter = counter + 1 ".
					   "WHERE history_id = ?";
				$stmt2 = \DBManager::get()->prepare($sql);
				$stmt2->execute(array($row['history_id']));
				break;	
			}
		}
		$this->executeRemoveOldHistory(4);	
		
        return true;
    }

    const ACTIVE_TIMESPAN = 7200; //60 * 60 * 2 = 2h

    function start($stop_others = TRUE)
    {
        # stop all questions
        if ($stop_others) {
            $_range_id = $this->rangeID;
            self::stopAll($_range_id);
        }

        # then start this one
        $this->setStopdate(time() + self::ACTIVE_TIMESPAN);

        if ($this->isNew()) {
            $this->executeStart();
        } else {
            $this->executeRestart();
            $this->executeContinue();
        }
        $ok = !$this->isError();

        if ($ok) {
            \NotificationCenter::postNotification('QuestionDidStart', $this);
        }

        return $ok;
    }

    function stop()
    {
        $this->executeStop();
        $ok = !$this->isError();

        if ($ok) {
            \NotificationCenter::postNotification('QuestionDidStop', $this);
        }

        return $ok;
    }


    /**
     * Stop all questions of a specific range_id.
     *
     * TODO potential performance problems
     *
     * @param string $range_id  the id of the course/institute
     */
    static private function stopAll($_range_id)
    {
        $questions = self::_findAllActive($_range_id);
        foreach ($questions as $question) {
            # TODO what about status?
            $status = $question->stop();
        }
    }
	
	/**
     * Load the answer history of a specific question
     */
    function history()
    {
       return 0; 
    }

    function toJSON($with_counter = true)
    {
        $answers = array();
        foreach ($this->answerArray as $answer) {
            $ary = array(
                'id'      => studip_utf8encode($answer['answer_id']),
                'text'    => studip_utf8encode($answer['text']));
            if ($with_counter) {
                $ary['counter'] = (int)$answer['counter'];
            }
            $answers[] = $ary;
        }
        return array(
            'id'        => $this->objectID,
            'question'  => studip_utf8encode($this->question),
            'startdate' => (int)$this->getStartdate(),
            'stopdate'  => (int)$this->getStopdate(),
            'state'     => $this->getState(),
            'answers'   => $answers
        );
    }				
}
