var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })

server.route({
  method: 'GET',
  path: '/api',
  handler: function(request, reply) {
    reply({ 'api' : 'hello!' });
  }
});

models.sequelize.sync().then(function() {
  server.start(function() {
    console.log('Running on 3000');
  });
});
