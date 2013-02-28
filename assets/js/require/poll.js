(function() {

  requirejs.config({
    baseUrl: cliqr.config.ASSETS + 'js/',
    paths: {
      jquery: 'vendor/jquery-1.8.2',
      underscore: 'vendor/underscore-1.4.4',
      backbone: 'vendor/backbone-0.9.10',
      handlebars: 'vendor/handlebars-1.0.rc.2',
      jqm: 'vendor/jquery.mobile-1.2.0.min'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      jqm: {
        deps: ['jquery', 'jqm_config'],
        exports: 'jquery.mobile'
      },
      handlebars: {
        exports: 'Handlebars'
      }
    },
    urlArgs: 'bust=' + (new Date()).getTime()
  });

  require(['poll_app'], function(PollApp) {
    var app;
    app = new PollApp();
    return app.initialize();
  });

}).call(this);