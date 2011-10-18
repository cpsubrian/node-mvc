/**
 * Application bootstrapping.
 */
var express = require('express'),
    fs = require('fs');

/**
 * Perform the bootstrap.
 */
module.exports = function(app) {
  bootUtil(app);
  bootConfig(app);
  bootHelpers(app);
  bootModels(app);
  bootControllers(app);
}

/**
 * Utility functions.
 */
function bootUtil(app) {
  require('../lib/util')(app);
}

/**
 * Configuration.
 */
function bootConfig(app) {  
  // Defaults.
  app.configure(function(){
    // Load conf.
    app.conf = require('../conf/conf.js');
    
    // Configure express server.
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'html');
    app.register(".html", require("jqtpl").express);
    bootFixLessCompiler();
    app.use(express.compiler({ src: __dirname + '/../public', enable: ['less'] }));
    app.use(express.static(__dirname + '/../public'));    
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: app.conf.session.secret }));
  });

  // Developement.
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  });
  
  // Tests.
  app.configure('test', function(){
    app.use(express.errorHandler());
  });
  
  // Production.
  app.configure('production', function(){
    app.use(express.errorHandler()); 
  });
}

/**
 * Setup static and dynamic helpers.
 */
function bootHelpers(app) {
  require('../helpers')(app);
}

/**
 * Load Models.
 */
function bootModels(app) {
  require('../models')(app);
}

/**
 * Load Controllers.
 */
function bootControllers(app) {
  require('../controllers')(app);
}


/**
 * Fix LESS compiler so it renders with the path relative to /public/css.
 */
function bootFixLessCompiler() {
   var cache = {};
   express.compiler.compilers.less.compile = function(str, fn) {
    if (!cache.less) {
      cache.less = require('less');
      var origRender = cache.less.render;
      cache.less.render = function(str, options, fn) {
        if (typeof(options) === 'function') {
          fn = options;
          options = { paths: [__dirname + '/../public/css'] };
        }
        return origRender.call(this, str, options, fn);
      };
    }
    var less = cache.less;
    try {
      less.render(str, fn);
    } catch (err) {
      fn(err);
    }
  }; 
}
