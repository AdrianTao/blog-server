'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Classify = function () {
  function Classify() {
    _classCallCheck(this, Classify);
  }

  // 创建分类


  _createClass(Classify, [{
    key: 'createClass',
    value: function createClass(req, res, next) {
      _models.Classify.createClass(req.body).then(function (json) {
        console.log(json);
        // if (ok && n>1) {
        res.send({
          code: 200,
          message: '创建成功'
        });
        // } else {
        //   throw new Error('创建失败')
        // }
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 删除分类

  }, {
    key: 'deleteClass',
    value: function deleteClass(req, res, next) {
      _models.Classify.deleteClass(req.body.id).then(function (json) {
        if (json.ok && json.n > 0) {
          res.send({
            code: 200,
            message: '删除成功'
          });
        } else {
          // 删除不存在的项
          throw new Error('该分类不存在');
        }
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 编辑分类

  }, {
    key: 'updateClass',
    value: function updateClass(req, res, next) {
      var id = req.body.id,
          classify = req.body.classify;
      _models.Classify.updateClass(id, { classify: classify }).then(function (result) {
        console.dir(result);
        if (result.ok && result.n > 0) {
          res.send({
            code: 200,
            message: '编辑成功'
          });
        } else {
          throw new Error('编辑失败');
        }
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 获取所有分类

  }, {
    key: 'findAllClass',
    value: function findAllClass(req, res, next) {
      _models.Classify.findAllClass().then(function (list) {
        res.send({
          code: 200,
          data: list
        });
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }
  }]);

  return Classify;
}();

exports.default = new Classify();