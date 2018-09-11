'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _article = require('../controller/article/article');

var _article2 = _interopRequireDefault(_article);

var _middleware = require('../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import bodyParser from 'body-parser'
// let urlencodedParser = bodyParser.urlencoded({ extended: false })
var router = _express2.default.Router();

router.post('/article/getList', _article2.default.getList);
router.post('/article/getlistByClass', _article2.default.getlistByClass);
router.post('/article/add', _middleware.checkToken, _article2.default.createArticle);
router.post('/article/delete', _middleware.checkToken, _article2.default.deleteArticle);
router.post('/article/getOne', _article2.default.getOne);
router.post('/article/edit', _middleware.checkToken, _article2.default.edit);

exports.default = router;