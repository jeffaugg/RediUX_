"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var users = [{
  login: "edonog",
  password: "509157"
}];
var LoginService = /*#__PURE__*/function () {
  function LoginService() {
    _classCallCheck(this, LoginService);
  }
  _createClass(LoginService, null, [{
    key: "login",
    value:
    // O método de login pega um data como parametro que é a requisição do servidor. Depois é percorrido ovetor de usuário para verificar se os dados, passados pela requisição, estão certos. Se estiverem, retorna true, se não, retorna false.
    function login(data) {
      for (var _i = 0, _users = users; _i < _users.length; _i++) {
        var user = _users[_i];
        var login = data.login;
        var password = data.password;
        if (user.login === login && user.password === password) {
          return true;
        }
      }
      return false;
    }
  }]);
  return LoginService;
}();
module.exports = LoginService;