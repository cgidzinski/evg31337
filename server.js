var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var app = express();
var cors = require('cors')

app.use(cors())
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
var softwareSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  date: Date,
  description: String,
  image: String,
});

var hardwareSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  date: Date,
  description: String,
  image: String,
});


var interestSchema = new mongoose.Schema({
  _id: Number,
  titleSubtext: String,
   interests: [{
      name: String,
      description: String
  }]
});

var aboutSchema = new mongoose.Schema({
  _id: Number,
  descriptionTitle: String,
  image: String,
  description: String,
   friends: [{
      name: String,
      company: String,
      description: String,
      website: String,
      image: String
  }]
});

var Project = mongoose.model('Project', projectSchema);
var Software = mongoose.model('Software', softwareSchema);
var Hardware = mongoose.model('Hardware', hardwareSchema);

var Interest = mongoose.model('Interest', interestSchema);
var About = mongoose.model('About', aboutSchema);

mongoose.connect('localhost');




app.set('views', __dirname + '/');
app.use(express.static(__dirname + "/public"));
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
