"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firestore = require("firebase/firestore");
var _firebase = _interopRequireDefault(require("../db/firebase.connection"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ContentServices = /*#__PURE__*/function () {
  function ContentServices() {
    _classCallCheck(this, ContentServices);
  }
  return _createClass(ContentServices, null, [{
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
        console.error("Erro ao listar conteúdo:", error);
        response.status(500).json({
          error: "Erro interno ao listar conteúdo."
        });
      });
    }
  }, {
    key: "retrieve",
    value: function retrieve(request, response) {
      var docRef = (0, _firestore.doc)(_firebase["default"], "content", request.params.id);
      (0, _firestore.getDoc)(docRef).then(function (content) {
        if (content.exists()) {
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
        } else {
          response.status(404).json({
            error: "Conteúdo não encontrado."
          });
        }
      })["catch"](function (error) {
        console.error("Erro ao recuperar conteúdo:", error);
        response.status(500).json({
          error: "Erro interno ao recuperar conteúdo."
        });
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
          return true;
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
        console.error("Erro ao buscar conteúdo:", error);
        response.status(500).json({
          error: "Erro interno ao buscar conteúdo."
        });
      });
    }
  }]);
}();
_defineProperty(ContentServices, "register", function (request, response) {
  (0, _firestore.addDoc)((0, _firestore.collection)(_firebase["default"], "content"), request.body).then(function (docRef) {
    response.json({
      _id: docRef.id
    });
  })["catch"](function (error) {
    console.error("Erro ao registrar conteúdo:", error);
    response.status(500).json({
      error: "Erro interno ao registrar conteúdo."
    });
  });
});
_defineProperty(ContentServices, "update", function (request, response) {
  (0, _firestore.updateDoc)((0, _firestore.doc)(_firebase["default"], "content", request.params.id), request.body).then(function () {
    response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    console.error("Erro ao atualizar conteúdo:", error);
    response.status(500).json({
      error: "Erro interno ao atualizar conteúdo."
    });
  });
});
_defineProperty(ContentServices, "delete", function (request, response) {
  (0, _firestore.deleteDoc)((0, _firestore.doc)(_firebase["default"], "content", request.params.id)).then(function () {
    return response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    console.error("Erro ao deletar conteúdo:", error);
    response.status(500).json({
      error: "Erro interno ao deletar conteúdo."
    });
  });
});
var _default = exports["default"] = ContentServices;