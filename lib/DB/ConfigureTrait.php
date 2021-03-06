<?php
namespace Cliqr\DB;

/**
 * eTask TODO
 */
trait ConfigureTrait
{
    protected static function configure($config = array())
    {
        $config['relationTypes'] = [
            'Assignment'      => '\\Cliqr\\DB\\Assignment',
            'AssignmentRange' => '\\Cliqr\\DB\\AssignmentRange',
            'Attempt'         => '\\Cliqr\\DB\\Attempt',
            'Response'        => '\\Cliqr\\DB\\Response',
            'Task'            => '\\Cliqr\\DB\\Task',
            'Test'            => '\\Cliqr\\DB\\Test',
            'TestTask'        => '\\Cliqr\\DB\\TestTask'
        ];

        parent::configure($config);
    }
}
