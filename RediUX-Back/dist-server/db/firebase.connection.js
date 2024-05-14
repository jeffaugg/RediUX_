"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _storage = require("firebase/storage");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8gog_UfFiU7Cap7qiptKLVBI89X_hM6I",
  authDomain: "project-rediux.firebaseapp.com",
  projectId: "project-rediux",
  storageBucket: "project-rediux.appspot.com",
  messagingSenderId: "365234318784",
  appId: "1:365234318784:web:92cb0aedfddc9e449a2c25"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = (0, _firestore.getFirestore)(app);

// Initialize Cloud Storage and get a reference to the service
var _default = db;
exports["default"] = _default;