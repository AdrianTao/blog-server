'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _middleware = require('../../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: 'login',
    value: function login(req, res, next) {
      var username = req.body.username,
          password = (0, _sha2.default)(req.body.password);
      _models.User.getUserByName(username).then(function (user) {
        console.log('password', password);
        console.log('user password', user.password);
        console.log('user', user);
        if (user && password === user.password) {
          res.json({
            code: 200,
            token: (0, _middleware.createToken)(username)
          });
        } else {
          res.json({
            code: -200,
            message: '用户名或密码错误'
          });
        }
      }).catch(function (err) {
        // 查找数据库发生错误，或者一些
        next(err);
        return res.json({
          code: -200,
          message: err.toString()
        });
      });
    }
  }]);

  return User;
}();

exports.default = new User();