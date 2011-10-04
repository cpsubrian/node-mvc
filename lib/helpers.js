/**
 * Application helpers.  These are available in all rendered template.
 */
module.exports = function(app) {
  var scripts = {
    'head': [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
      //'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js',
      'http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.1/backbone-min.js',
      //'https://github.com/documentcloud/backbone/raw/master/backbone.js',
      //'http://cdnjs.cloudflare.com/ajax/libs/socket.io/0.7.0/socket.io.min.js',
      'http://html5shim.googlecode.com/svn/trunk/html5.js',
    ],
    'footer': [
      '/js/main.js'       
    ]
  };
  
  /* Static helpers. */
  app.helpers({
    // Application title.
    title: app.conf.title,  
    
    // Return scripts from settings.js
    headScripts: function() {
      return scripts['head'].map(function(src) {
        return '<script type="text/javascript" src="' + src + '"></script>'
      }).join("\n");
    },
    footerScripts: function(req, res) {
      return scripts['footer'].map(function(src) {
        return '<script type="text/javascript" src="' + src + '"></script>'
      }).join("\n");
    }
  });
  
  /* Dynamic helpers. */
  //app.dynamicHelpers({});
}