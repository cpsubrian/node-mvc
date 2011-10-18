var cluster = require('cluster');
var conf = require('../conf/conf');
var app = cluster('../lib/app');

app.set('workers', conf.cluster.workers)
  .use(cluster.logger('logs'))
  .use(cluster.stats())
  .use(cluster.pidfiles('pids'))
  .use(cluster.cli())
  .use(cluster.reload());

// Only listen on '$ node server.js'
if (!module.parent) {
  app.listen(conf.port);
}

module.exports = {
  start: function() {
    app.listen(conf.port);
  }
}
