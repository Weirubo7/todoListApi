var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./app/routes/todoListRoutes'); //importing route
routes(app); //register the route
app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('todo list RESTful API server started on: ' + port);