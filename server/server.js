var express = require('express');
var app = express();
var routes = require('./routes.js')
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../app'));
app.use('/glassdoor', routes);

app.listen(port, function() {
  console.log('listening on port: ' + port);
});

module.exports = app;
