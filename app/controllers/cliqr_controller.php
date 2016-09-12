<?
require_once 'cliqr_controller.php';

class CliqrStudipController extends StudipController
{
    function before_filter(&$action, &$args)
    {
        $this->plugin = $this->dispatcher->plugin;
        $this->container = $this->dispatcher->container;
    }

    protected function current_user()
    {
        return $GLOBALS['user'];
    }

    protected function polls_url($cid)
    {

        $abs_base = $GLOBALS['ABSOLUTE_URI_STUDIP'];

        # Fallback to HTTP for uos
        # TODO remove me ASAP
        if (0 === strncasecmp($abs_base, 'https', 5)) {
            if (stripos($abs_base, 'uos.de') !== FALSE || stripos($abs_base, 'uni-osnabrueck.de') !== FALSE) {
                $abs_base = 'http' . substr($abs_base, 5);
            }
        }

        # force an absolute URL
        URLHelper::setBaseUrl($abs_base);

        $url = current(explode('?', $this->url_for('polls', $cid)));

        # reset to the default set in plugins.php
        URLHelper::setBaseUrl($GLOBALS['CANONICAL_RELATIVE_PATH_STUDIP']);

        return $url;
    }

    public function url_for($to)
    {
        $args = func_get_args();

        # find params
        $params = array();
        if (is_array(end($args))) {
            $params = array_pop($args);
        }

        # urlencode all but the first argument
        $args = array_map('urlencode', $args);
        $args[0] = $to;

        return PluginEngine::getURL($this->dispatcher->plugin, $params, join('/', $args));
    }

    public function render_json($data)
    {
        $this->response->add_header('Content-Type', 'application/json;charset=utf-8');
        $this->render_text(json_encode(studip_utf8encode($data)));
    }


    /**
     * Return the Content-Type of the HTTP request.
     * @return string the content type
     */
    private function contentType()
    {
        if (preg_match('/^([^,\;]*)/', @$_SERVER['CONTENT_TYPE'], $matches)) {
            return strtolower(trim($matches[1]));
        }
        return null;
    }


    /**
     * Determine whether this Request has a Content-type of
     * application/json
     * @return bool true if it has, otherwise false
     */
    protected function hasJSONContentType()
    {
        return $this->contentType() === 'application/json';
    }


    /**
     * Decode the request body using json_decode and utf8decode.
     * @return mixed the decoded request body.
     */
    protected function parseJSONBody()
    {
        $body = file_get_contents('php://input');
        return self::utf8decode(json_decode($body, true));
    }


    /**
     * Exception handler called when the performance of an action raises an
     * exception.
     *
     * @param  object     the thrown exception
     */
    function rescue($exception)
    {
        if ($exception instanceof \Cliqr\RecordNotFound) {
            return $this->dispatcher->trails_error(
                new Trails_Exception(404, 'Record not found'));
        } else {
            throw $exception;
        }
    }

    protected static function ensureMD5($id)
    {
        if (!preg_match('/^[0-9a-f]{32}$/', $id)) {
            throw new Trails_Exception(400);
        }
        return $id;
    }


    /**
     * Encodes a string or array from UTF-8 to Stud.IP encoding
     * (WINDOWS-1252/ISO-8859-1 with numeric HTML-ENTITIES)
     *
     * @stolenfrom Stud.IP v2.4
     *
     * @param mixed $data a string in UTF-8 or an array with all strings encoded in utf-8
     * @return string  the string in WINDOWS-1252/HTML-ENTITIES
     */
    public static function utf8decode($data)
    {
        if (is_array($data)) {
            $new_data = array();
            foreach ($data as $key => $value) {
                $key = studip_utf8decode($key);
                $new_data[$key] = $value = self::utf8decode($value);
            }
            return $new_data;
        } elseif (is_string($data)) {
            if(!preg_match('/[\200-\377]/', $data)){
                return $data;
            } else {
                $windows1252 = array(
                    "\x80" => '&#8364;',
                    "\x81" => '&#65533;',
                    "\x82" => '&#8218;',
                    "\x83" => '&#402;',
                    "\x84" => '&#8222;',
                    "\x85" => '&#8230;',
                    "\x86" => '&#8224;',
                    "\x87" => '&#8225;',
                    "\x88" => '&#710;',
                    "\x89" => '&#8240;',
                    "\x8A" => '&#352;',
                    "\x8B" => '&#8249;',
                    "\x8C" => '&#338;',
                    "\x8D" => '&#65533;',
                    "\x8E" => '&#381;',
                    "\x8F" => '&#65533;',
                    "\x90" => '&#65533;',
                    "\x91" => '&#8216;',
                    "\x92" => '&#8217;',
                    "\x93" => '&#8220;',
                    "\x94" => '&#8221;',
                    "\x95" => '&#8226;',
                    "\x96" => '&#8211;',
                    "\x97" => '&#8212;',
                    "\x98" => '&#732;',
                    "\x99" => '&#8482;',
                    "\x9A" => '&#353;',
                    "\x9B" => '&#8250;',
                    "\x9C" => '&#339;',
                    "\x9D" => '&#65533;',
                    "\x9E" => '&#382;',
                    "\x9F" => '&#376;');
                return str_replace(
                    array_values($windows1252),
                    array_keys($windows1252),
                    utf8_decode(mb_encode_numericentity(
                                    $data,
                                    array(0x100, 0xffff, 0, 0xffff),
                                    'UTF-8'
                                ))
                );
            }
        } else {
            return $data;
        }
    }

    # require a cid; throw a 400 otherwise
    protected static function requireContext()
    {
        $cid = self::ensureMD5(\Request::option("cid"));
        return $cid;
    }

    # require ´tutor´ permission; throw a 403 otherwise
    protected static function requireAuthorisation($cid)
    {
        if (!$GLOBALS['perm']->have_studip_perm("tutor", $cid)) {
            throw new \Trails_Exception(403);
        }
    }

    protected function can($action, $resource, $resourceValue = null)
    {
        return $this->container['authority']->can($action, $resource, $resourceValue);
    }
}
