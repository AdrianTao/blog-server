'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib');

exports.default = {
  // 评论某文章
  comment: function comment(params) {
    return _lib.Comments.create(params);
  },


  // 获取某文章的评论
  getComments: function getComments(page, limit, id) {
    if (page && limit && id !== null) {
      var skip = (page - 1) * limit;

      return Promise.all([_lib.Comments.find({ article_id: id }).skip(skip).limit(limit).lean(), _lib.Comments.count()]);
    } else {
      return _lib.Comments.find.sort({ _id: -1 });
    }
  }
};