"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// var express = require('express');
// var router = express.Router();

var router = _express["default"].Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.pug', {
    title: 'Express'
  });
});

// module.exports = router;
var _default = exports["default"] = router;