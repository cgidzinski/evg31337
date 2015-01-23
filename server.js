var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


var projectSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  date: Date,
  titleSubtext: String,
  image: String,
  quickDescription: String,
  mainText: String,
  poster: String,
  links: [{
      text: String,
      url: String
  }]
});
var Project = mongoose.model('Project', projectSchema);

mongoose.connect('localhost');









app.set('views', __dirname + '/');
app.use(express.static(__dirname + "/public"));
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
