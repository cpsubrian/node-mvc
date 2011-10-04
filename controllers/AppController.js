/**
 * Application Controller.
 */
var AppController = module.exports = function(app) {
  // Routes.
  app.get('/', this.index);
}

/**
 * Methods and properties.
 */
AppController.prototype = {
  
  /**
   * Index. 
   */
  index: function(req, res) {
    res.render('index');
  }
  
};

