var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
//app.use('/partials', express.static(__dirname + '/partials'));

//app.all('/*', function(req, res, next) {
  //  // Just send the index.html for other files to support HTML5Mode
 //   res.sendfile('index.html', { root: __dirname });
//});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});