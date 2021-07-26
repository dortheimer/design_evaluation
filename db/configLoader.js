const config = require('config');

const server = config.get('server');

module.exports = {
  development: server.db,
  test: server.db,
  production: server.db
};