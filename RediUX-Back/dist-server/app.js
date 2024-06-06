"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
require("firebase/firestore");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routes/index"));
var _users = _interopRequireDefault(require("./routes/users"));
var _contents = _interopRequireDefault(require("./routes/contents"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importar o módulo dotenv e carregar as variáveis de ambiente do arquivo .env

_dotenv["default"].config();

// Importar "firebase/firestore" e outras dependências

var app = (0, _express["default"])();

// Definindo o mecanismo de visualização como Pug
app.set('view engine', 'pug');

// Definindo o diretório de visualizações
var viewsDirectory = _path["default"].join(__dirname, '..', 'server', 'views');
app.set('views', viewsDirectory);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));

// Configurando cabeçalhos CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
app.use('/contents', _contents["default"]);
var _default = exports["default"] = app;