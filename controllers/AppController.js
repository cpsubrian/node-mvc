/**
 * Application Controller.
 */
module.exports = function(app) {
  
  /**
   * Controller Constructor.
   */
  var AppController = function() {
    app.util.bindAll(this);
    
    // Routes.
    app.get('/', this.index);
  }
  
  /**
   * Index. 
   */
  AppController.prototype.index = function(req, res) {
      res.render('index');
  }
  
  return AppController;
}
