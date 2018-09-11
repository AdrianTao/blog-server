'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib');

exports.default = {
  // 添加文章
  addArticle: function addArticle(params) {
    return _lib.Articles.create(params);
  },


  // 获取文章列表
  getArticles: function getArticles(page, limit) {
    if (page && limit) {
      var skip = (page - 1) * limit;

      return Promise.all([
      // 返回忽略content字段
      _lib.Articles.find({}, { content: 0 }).skip(skip).limit(limit).lean(), _lib.Articles.count()]);
    } else {
      return _lib.Articles.find().sort({ _id: -1 });
    }
  },


  // 根据分类获取所有文章
  getArticlesByClassify: function getArticlesByClassify(page, limit, classify) {
    if (page && limit && classify) {
      var skip = (page - 1) * limit;

      return Promise.all([
      // 返回忽略content字段
      _lib.Articles.find({ classify: classify }, { content: 0 }).skip(skip).limit(limit).lean(),
      // Articles.find({classify}).skip(skip).limit(limit),
      _lib.Articles.count()]);
    } else {
      return _lib.Articles.find().sort({ _id: -1 });
    }
  },


  // 删除文章
  deleteArticle: function deleteArticle(id) {
    console.log('id', id);
    return _lib.Articles.remove({ _id: id });
  },


  // 获取某一篇文章
  getOne: function getOne(id) {
    console.log('id', id);
    return _lib.Articles.find({ _id: id }).lean();
  },


  // 编辑某一篇文章
  editArticle: function editArticle(id, data) {
    return _lib.Articles.update({ _id: id }, { $set: data });
  }
};