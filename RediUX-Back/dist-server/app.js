"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("firebase/firestore");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routes/index"));
var _users = _interopRequireDefault(require("./routes/users"));
var _contents = _interopRequireDefault(require("./routes/contents"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = (0, _express["default"])();

// view engine setup
app.set('view engine', 'pug');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
var viewsDirectory = process.env.npm_config_local_prefix + "\\server\\views";
app.set('views', viewsDirectory);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
app.use('/contents', _contents["default"]);
var _default = app;
exports["default"] = _default;