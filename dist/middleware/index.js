'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = exports.checkToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 验证token中间件
var checkToken = function checkToken(req, res, next) {
  if (req.headers['authorization']) {
    var token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    var decoded = _jsonwebtoken2.default.decode(token, 'crazy');
    // 如果过期了就重新登录
    // 验证token也需要优化
    if (token && decoded.exp <= Date.now() / 1000) {
      return res.send({
        code: 401,
        message: "授权已经过期，请重新登陆"
      });
    }
  } else {
    return res.send({
      code: 400,
      message: "未授权"
    });
  }

  next();
};

var createToken = function createToken(name) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7); //有效期设置为七天
  var token = _jsonwebtoken2.default.sign({
    name: name,
    exp: parseInt(expiry.getTime() / 1000) //除以1000以后表示的是秒数
  }, 'crazy');
  return token;
};

exports.checkToken = checkToken;
exports.createToken = createToken;