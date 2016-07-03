//
// # SimpleServer
//
// A simple hotel booking application.
//
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));
router.set('views', path.join(__dirname, 'views'));
router.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//router.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

require('./routes')(router);

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (router.get('env') === 'development') {
  router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      status: err.status || "ERR"
    });
  });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: err.status || "ERR"
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
