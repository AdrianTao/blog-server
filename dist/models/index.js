'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.Classify = exports.Comments = exports.Articles = undefined;

var _articles = require('./articles');

var _articles2 = _interopRequireDefault(_articles);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _classify = require('./classify');

var _classify2 = _interopRequireDefault(_classify);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-13 20:04:55 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-05-13 21:04:06
 * 
 * 数据库操作曾
 */

exports.Articles = _articles2.default;
exports.Comments = _comments2.default;
exports.Classify = _classify2.default;
exports.User = _user2.default;