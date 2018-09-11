'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib');

exports.default = {
  getUserByName: function getUserByName(username) {
    return _lib.User.findOne({ username: username });
  }
};