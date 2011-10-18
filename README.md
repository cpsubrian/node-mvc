# Node.js MVC Boilerplate

This is a fairly minimal MVC setup for a node.js app.

## Application Structure

  * `bin/`
    * `server` - Server startup script.
  * `conf/`
    * `conf.js` - Application configuration.
  * `controllers/`
    * ... - Put controllers here.
  * `helpers/`
    * `scripts.js` - Easy loading of scripts in your templates.
    * ... - Put more express helpers here.
  * `lib/`
    * `app.js` - Express app.
    * `boot.js` - Application bootstrapping.
    * `server.js` - Cluster server.
    * `util.js` - Misc. util functions.
  * `models/`
    * ... - Put  models here.
  * `public/`
    * `css/` - .less (or .css) files
    * `js/` - javascript files.
  * `views/`
    * ... - Express views (jqtpl by default)
                    

## Installation / Usage

  1. RUN `npm install` to load external modules.
  2. RENAME `conf/conf-sample.js` to `conf/conf.js` and change settings 
     to suit the app.
  3. RUN `node bin/server` to start the cluster server.


## Development / Debugging

  1. For development it may be easier to RUN `node lib/app.js` so you get the 
     normal console output (cluster server will log errors by default)
              
## Auto-loading

There is a fair amount of auto-loading built into this application structure.

  * Any .js file in `models/` will be autoloaded.
  * Any .js file in `controllers/` will be autoloaded.
  * Any .js file in `helpers/` will be autoloaded.

These files will be autoloaded in whatever order fs.readdirSync() returns them. 
If more control over load order is needed ... well ... let me know how you
did it :)

ALL auto-loaded files expect an export statement like:

    module.exports = function(app) {
      // app is the express server.
    }

In ALL auto-loaded files app will contain `app.util` and `app.conf`.

In controller files app will also contain `app.models`.  `app.models`
contains constructor functions for all the models in `models/`.  So, if one
of your models is `models/Book.js`, you would create an instance of a Book in
one of your controllers like so:

    var book = new app.models.Book();

## Sample Controller

See `controllers/AppController.js`

## Sample Model

See `models/Sample.js`

