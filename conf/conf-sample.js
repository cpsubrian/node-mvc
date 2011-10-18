/**
 * Application Configuration.
 */
module.exports = {
  port: 3007,
  hostname: 'localhost:3007',
  title: 'Application Title',
  session: {
    secret: 'Your Secret Here'
  },
  cluster: {
    workers: 1
  }
};
