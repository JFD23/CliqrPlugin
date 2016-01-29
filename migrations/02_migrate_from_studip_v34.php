<?php
class MigrateFromStudipV34 extends Migration
{
    public function description()
    {
        return "create a configuration entry for the URL shortener service API key";
    }

    public function up()
    {
        $mig = new \Cliqr\StudIPv34Migrator();
        $mig->migrate();
    }

    public function down()
    {
        # dummy
    }
}
