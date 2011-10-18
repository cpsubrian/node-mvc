/**
 * Controller loading.
 */

var fs = require('fs');

module.exports = function(app){
  app.controllers = {};
  
  // Load all .js files in this folder as controllers.
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    if (file.indexOf('.js') === false) return;
    var name = file.substr(0, file.indexOf('.'));
    
    // Controllers should only have one instance each.
    var Controller = require('./' + name)(app);
    app.controllers[name] = new Controller();
  });
}
