'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.Classify = exports.Comments = exports.Articles = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-13 20:10:09 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-04 20:22:16
 * 
 * 数据库模型
 */

_mongoose2.default.connect("mongodb://localhost/my-story");

// 文章
var articlesSchema = new _mongoose2.default.Schema({
  classify: { type: String },
  title: { type: String },
  content: { type: String },
  time: {
    type: Date,
    default: Date.now
  }
});
articlesSchema.virtual('date').get(function () {
  console.log((0, _moment2.default)(this.time).format('YYYY-MM-DD'));
  return (0, _moment2.default)(this.time).format('YYYY-MM-DD');
});
var Articles = _mongoose2.default.model('articles', articlesSchema);

// 用户评论
var Comments = _mongoose2.default.model('comments', new _mongoose2.default.Schema({
  // 主键用 _id
  article_id: { type: String }, // 文章id
  reply_which_id: { type: String }, // 回复的id
  author: { type: String }, // 评论者id
  content: { type: String }, // 评论内容
  like_count: { type: Number, default: 0 }, // 点赞数量
  created_at: { type: Date, default: Date.now // 创建时间
  } }));

// 分类
var Classify = _mongoose2.default.model('classify', new _mongoose2.default.Schema({
  classify: { type: String }
}));

// 用户
var User = _mongoose2.default.model('user', new _mongoose2.default.Schema({
  username: { type: String },
  password: { type: String }
}));

exports.Articles = Articles;
exports.Comments = Comments;
exports.Classify = Classify;
exports.User = User;