var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })

// routes
server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {
  server.start(function() {
    console.log('Running on 3000');
  });
});
