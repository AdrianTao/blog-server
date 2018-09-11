'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
  function Article() {
    _classCallCheck(this, Article);
  }

  // 获取文章列表


  _createClass(Article, [{
    key: 'getList',
    value: function getList(req, res, next) {
      // console.log(req.body)
      var _req$body = req.body,
          page = _req$body.page,
          limit = _req$body.limit;

      _models.Articles.getArticles(page, limit).then(function (json) {
        // res.json(json)
        var articleLists = json[0],
            total = json[1],
            totalPage = Math.ceil(total / limit),
            hasNext = totalPage > page ? true : false,
            hasPrev = page > 1;

        // 转格式
        articleLists.forEach(function (item) {
          item.time = (0, _moment2.default)(item.time).format('YYYY-MM-DD');
        });

        // console.dir(articleLists)
        res.json({
          code: 200,
          message: 'success',
          data: {
            articleLists: articleLists,
            total: total,
            hasNext: hasNext,
            hasPrev: hasPrev
          }
        });
      }).catch(function (err) {
        next(err);
        return res.json({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 根据classify获取文章列表

  }, {
    key: 'getlistByClass',
    value: function getlistByClass(req, res, next) {
      var _req$body2 = req.body,
          classify = _req$body2.classify,
          page = _req$body2.page,
          limit = _req$body2.limit;

      _models.Articles.getArticlesByClassify(page, limit, classify).then(function (json) {
        var articleLists = json[0],
            total = json[1],
            totalPage = Math.ceil(total / limit),
            hasNext = totalPage > page ? 1 : 0,
            hasPrev = page > 1;

        articleLists.forEach(function (item) {
          delete item.__v;
          item.time = (0, _moment2.default)(item.time).format('YYYY-MM-DD');
        });

        res.json({
          code: 200,
          message: 'success',
          data: {
            articleLists: articleLists,
            hasNext: hasNext,
            hasPrev: hasPrev
          }
        });
      }).catch(function (err) {
        next(err);
        return res.json({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 新增文章

  }, {
    key: 'createArticle',
    value: function createArticle(req, res, next) {
      _models.Articles.addArticle(req.body).then(function (json) {
        console.log(json);
        res.json({
          code: 200,
          message: '新增成功'
        });
      }).catch(function (err) {
        next(err);
        return res.json({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 删除

  }, {
    key: 'deleteArticle',
    value: function deleteArticle(req, res, next) {
      _models.Articles.deleteArticle(req.body.id).then(function (json) {
        if (json.ok && json.n > 0) {
          res.send({
            code: 200,
            message: '删除成功'
          });
        } else {
          throw new Error('该文章不存在');
        }
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 获取一篇文章

  }, {
    key: 'getOne',
    value: function getOne(req, res, next) {
      _models.Articles.getOne(req.body.id).then(function (json) {
        console.dir(json);
        json[0].time = (0, _moment2.default)(json[0].time).format('YYYY-MM-DD');

        res.json({
          code: 200,
          message: '',
          data: json[0]
        });
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 编辑文章

  }, {
    key: 'edit',
    value: function edit(req, res, next) {
      console.log(req.body);
      var id = req.body.id,
          title = req.body.title,
          content = req.body.content;

      _models.Articles.editArticle(id, { title: title, content: content }).then(function (result) {
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
  }]);

  return Article;
}();

exports.default = new Article();