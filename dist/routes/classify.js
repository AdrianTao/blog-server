'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _classify = require('../controller/classify/classify');

var _classify2 = _interopRequireDefault(_classify);

var _middleware = require('../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/classify/create', _middleware.checkToken, _classify2.default.createClass);
router.post('/classify/delete', _middleware.checkToken, _classify2.default.deleteClass);
router.post('/classify/edit', _middleware.checkToken, _classify2.default.updateClass);
router.get('/classify/list', _classify2.default.findAllClass);

exports.default = router;