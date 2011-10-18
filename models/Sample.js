/**
 * Sample model.
 */
 
module.exports = function(app) {
 
 /**
  * Model Constructor.
  */
  var Sample = function() {
    app.util.bindAll(this);
  }
  
  /**
   * Methods.
   */
  Sample.prototype.toString = function() {
    return 'Some fancy string'; 
  }
 
  
  return Sample;
}