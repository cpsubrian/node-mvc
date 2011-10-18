/**
 * Model Loading
 */

var fs = require('fs');

module.exports = function(app){
  app.models = {};
  
  // Load all .js files in this folder as models.
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    if (file.indexOf('.js') === false) return;
    var name = file.substr(0, file.indexOf('.'));
    
    // Each model file should return its constructor function 
    // for later instantiation.
    var Model = require('./' + name)(app);
    app.models[name] = Model;
  });
}