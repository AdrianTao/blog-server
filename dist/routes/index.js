'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/api', _article2.default);
  app.use('/api', _comments2.default);
  app.use('/api', _classify2.default);
  app.use('/api', _user2.default);
};

var _article = require('./article');

var _article2 = _interopRequireDefault(_article);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _classify = require('./classify');

var _classify2 = _interopRequireDefault(_classify);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }