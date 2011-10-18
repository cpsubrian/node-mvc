/**
 * Helper loading.
 */

var fs = require('fs');

module.exports = function(app){
  
  // Static helpers.
  app.helpers({
    title: app.conf.title
  });
  
  // Dynamic helpers.
  app.dynamicHelpers({});
  
  // Load all helper sub-files.
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    if (file.indexOf('.js') === false) return;
    var name = file.substr(0, file.indexOf('.'));
    
    // We only need to load the helpers once.
    require('./' + name)(app);
  });
  
}