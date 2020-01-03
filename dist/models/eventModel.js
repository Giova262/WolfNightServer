"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../bd/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Event = _database.sequelize.define('events', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name_user: {
    type: _sequelize["default"].TEXT
  },
  titulo: {
    type: _sequelize["default"].TEXT
  },
  time: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  }
});

var _default = Event;
exports["default"] = _default;