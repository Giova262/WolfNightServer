"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../bd/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nickname: {
    type: _sequelize["default"].TEXT
  },
  mail: {
    type: _sequelize["default"].TEXT
  },
  pass: {
    type: _sequelize["default"].TEXT
  },
  foto: {
    type: _sequelize["default"].TEXT
  },
  L: {
    type: _sequelize["default"].BOOLEAN
  },
  M: {
    type: _sequelize["default"].BOOLEAN
  },
  MI: {
    type: _sequelize["default"].BOOLEAN
  },
  J: {
    type: _sequelize["default"].BOOLEAN
  },
  V: {
    type: _sequelize["default"].BOOLEAN
  },
  S: {
    type: _sequelize["default"].BOOLEAN
  },
  D: {
    type: _sequelize["default"].BOOLEAN
  },
  HL: {
    type: _sequelize["default"].TEXT
  },
  HM: {
    type: _sequelize["default"].TEXT
  },
  HMI: {
    type: _sequelize["default"].TEXT
  },
  HJ: {
    type: _sequelize["default"].TEXT
  },
  HV: {
    type: _sequelize["default"].TEXT
  },
  HS: {
    type: _sequelize["default"].TEXT
  },
  HD: {
    type: _sequelize["default"].TEXT
  },
  token: {
    type: _sequelize["default"].TEXT
  }
});

var _default = User;
exports["default"] = _default;