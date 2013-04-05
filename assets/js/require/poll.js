// Generated by CoffeeScript 1.5.0
(function() {

  requirejs.config({
    baseUrl: cliqr.config.ASSETS + 'js/',
    paths: {
      jquery: 'vendor/jquery-1.8.2',
      underscore: 'vendor/underscore-1.4.4',
      backbone: 'vendor/backbone-1.0.0',
      handlebars: 'vendor/handlebars-1.0.rc.2',
      jqm: 'vendor/jquery.mobile-1.2.0.min',
      pusher: document.location.protocol === 'https:' ? 'https://d3dy5gmtp8yhk7.cloudfront.net/1.12/pusher.min' : 'http://js.pusher.com/1.12/pusher.min'
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
      },
      pusher: {
        exports: 'Pusher'
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
