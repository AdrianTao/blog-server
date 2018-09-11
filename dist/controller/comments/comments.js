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

var Comments = function () {
  function Comments() {
    _classCallCheck(this, Comments);
  }

  // 评论


  _createClass(Comments, [{
    key: 'comment',
    value: function comment(req, res, next) {
      _models.Comments.comment(req.body).then(function (json) {
        res.json({
          code: 200,
          message: '评论成功',
          data: json
        });
      }).catch(function (err) {
        next(err);
        return res.json({
          code: -200,
          message: err.toString()
        });
      });
    }

    // 获取某一篇文章的评论

  }, {
    key: 'getComments',
    value: function getComments(req, res, next) {
      var _req$body = req.body,
          page = _req$body.page,
          limit = _req$body.limit,
          id = _req$body.id;

      _models.Comments.getComments(page, limit, id).then(function (json) {
        var comments = json[0],
            total = json[1],
            totalPage = Math.ceil(total / limit),
            hasNext = totalPage > page ? 1 : 0,
            hasPrev = page > 1;

        comments.forEach(function (item) {
          item.created_at = (0, _moment2.default)(item.created_at).format('YYYY-MM-DD');
        });

        res.json({
          code: 200,
          message: '',
          data: {
            comments: comments,
            hasNext: hasNext,
            hasPrev: hasPrev
          }
        });
      }).catch(function (err) {
        res.send({
          code: -200,
          message: err.toString()
        });
      });
    }
  }]);

  return Comments;
}();

exports.default = new Comments();