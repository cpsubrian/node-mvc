/**
 * FreedomConnector
 */

// Load modules.
var express = require('express'), 
    app = module.exports = express.createServer(),
    boot = require('../lib/boot');
    
// Bootstrap the application.
boot(app);

// Only listen on $ node app.js
if (!module.parent) {
  app.listen(app.conf.port);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
