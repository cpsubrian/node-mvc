# Node.js MVC Boilerplate

This is a fairly minimal MVC setup for a node.js app.

Basic application structure is:

  * /server.js - Cluster server.
  * /app.js - Main application.
  * /conf.js - Configuration.
  * /models/* - Put models here.
  * /controllers/* - Put controllers here.
  * /lib/boot.js - Bootstrapping and configuration of the app.
  * /lib/helpers.js - Static and dynamic express helpers.
                    

Make sure /models and /controllers exists or you will get file read errors.

RUN `npm install` to load external modules.
              
