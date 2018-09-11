'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib');

exports.default = {
  // 创建分类
  createClass: function createClass(params) {
    return _lib.Classify.create(params);
  },


  // 删除分类
  deleteClass: function deleteClass(id) {
    console.log('删除分类id: ', id);
    return _lib.Classify.remove({ _id: id });
  },


  // 编辑分类
  updateClass: function updateClass(id, data) {
    return _lib.Classify.update({ _id: id }, { $set: data });
  },


  // 获取所有分类
  findAllClass: function findAllClass() {
    return _lib.Classify.find();
  }
};