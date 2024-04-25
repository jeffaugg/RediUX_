"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firestore = require("firebase/firestore");
var _firebase = _interopRequireDefault(require("../db/firebase.connection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContentServices = /*#__PURE__*/function () {
  function ContentServices() {
    _classCallCheck(this, ContentServices);
  }
  _createClass(ContentServices, null, [{
    key: "list",
    value: function list(request, response) {
      (0, _firestore.getDocs)((0, _firestore.collection)(_firebase["default"], "content")).then(function (contentSnapshot) {
        var contents = [];
        contentSnapshot.forEach(function (content) {
          var _id = content.id;
          var _content$data = content.data(),
            titulo = _content$data.titulo,
            tags = _content$data.tags,
            midia = _content$data.midia,
            descricao = _content$data.descricao,
            link = _content$data.link,
            autor = _content$data.autor,
            imgUrl = _content$data.imgUrl,
            file = _content$data.file;
          contents.push({
            _id: _id,
            tags: tags,
            titulo: titulo,
            midia: midia,
            descricao: descricao,
            link: link,
            autor: autor,
            imgUrl: imgUrl,
            file: file
          });
        });
        response.json(contents);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "retrieve",
    value: function retrieve(request, response) {
      var docRef = (0, _firestore.doc)(_firebase["default"], "content", request.params.id);
      (0, _firestore.getDoc)(docRef).then(function (content) {
        var res = {
          titulo: content.data().titulo,
          tags: content.data().tags,
          midia: content.data().midia,
          descricao: content.data().descricao,
          link: content.data().link,
          autor: content.data().autor,
          imgUrl: content.data().imgUrl,
          file: content.data().file
        };
        response.json(res);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "search",
    value: function search(request, response) {
      var searchTerm = String(request.query.term).toLowerCase();
      var searchMedia = String(request.query.media).toLowerCase();
      var contentCollectionRef = (0, _firestore.collection)(_firebase["default"], "content");
      var contentHasMedia = function contentHasMedia(objMedia) {
        if (searchMedia === "null") {
          return true; // Permitir a pesquisa sem considerar o valor de 'media'
        }

        return objMedia[searchMedia];
      };
      console.log("Valor do parâmetro 'media':", request.query.media);
      (0, _firestore.getDocs)(contentCollectionRef).then(function (contentSnapshot) {
        var contents = [];
        contentSnapshot.forEach(function (content) {
          var _id = content.id;
          var _content$data2 = content.data(),
            titulo = _content$data2.titulo,
            tags = _content$data2.tags,
            midia = _content$data2.midia,
            descricao = _content$data2.descricao,
            link = _content$data2.link,
            autor = _content$data2.autor,
            imgUrl = _content$data2.imgUrl,
            file = _content$data2.file;
          if (titulo.toLowerCase().includes(searchTerm) && contentHasMedia(midia)) {
            contents.push({
              _id: _id,
              tags: tags,
              titulo: titulo,
              midia: midia,
              descricao: descricao,
              link: link,
              autor: autor,
              imgUrl: imgUrl,
              file: file
            });
          }
        });
        response.json(contents);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);
  return ContentServices;
}(); // module.exports = ContentServices 
_defineProperty(ContentServices, "register", function (request, response) {
  (0, _firestore.addDoc)((0, _firestore.collection)(_firebase["default"], "content"), request.body).then(function (docRef) {
    response.json({
      _id: docRef.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
_defineProperty(ContentServices, "update", function (request, response) {
  (0, _firestore.updateDoc)((0, _firestore.doc)(_firebase["default"], "content", request.params.id), request.body).then(function () {
    response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
_defineProperty(ContentServices, "delete", function (request, response) {
  (0, _firestore.deleteDoc)((0, _firestore.doc)(_firebase["default"], "content", request.params.id)).then(function () {
    return response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
var _default = ContentServices;
exports["default"] = _default;