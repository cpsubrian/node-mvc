/**
 * Custom Error Handling.
 * 
 * Note: app.error does not work if you are using the errorHandler middleware.
 */

var sys = require('sys');

/**
 * Define Error Types.
 */
var ErrorNotFound = global.ErrorNotFound = function (msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}
sys.inherits(ErrorNotFound, Error);
  
/**
 * Setup error fallthrough.
 * 
 * Errors will fall through these handlers via next().
 */
module.exports = function(app) {
  // 404 - NotFound.
  app.error(function(err, req, res, next) {
    if (err instanceof NotFound) {
      res.render('errors/404', { status: 404 });
    } else {
      next(err);
    }
  });
  
  // 500 - ServerError.
  app.error(function(err, req, res, next) {
    res.render('errors/500', {
      status: 500,
      locals: {
        error: err
      } 
    });
  });  
}