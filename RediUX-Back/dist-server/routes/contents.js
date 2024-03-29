"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _contentsFirebase = _interopRequireDefault(require("../services/contents.firebase.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
/* GET users listing. */

router.get('/list', function (req, res, next) {
  _contentsFirebase["default"].list(req, res);
});
router.post("/register", function (req, res, next) {
  _contentsFirebase["default"].register(req, res);
});
router.get("/retrieve/:id", function (req, res, next) {
  _contentsFirebase["default"].retrieve(req, res);
});
router.put("/update/:id", function (req, res, next) {
  _contentsFirebase["default"].update(req, res);
});
router["delete"]("/delete/:id", function (req, res, next) {
  _contentsFirebase["default"]["delete"](req, res);
});
router.get('/search', function (req, res, next) {
  _contentsFirebase["default"].search(req, res);
});

//module.exports = router;
var _default = router;
exports["default"] = _default;