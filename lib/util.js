/**
 * Utility functions.
 */
 
var _ = require('underscore');
 
module.exports = function(app) {
  app.util = {
    bindAll: _.bindAll,
  };
}