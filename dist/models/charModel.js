"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../bd/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Char = _database.sequelize.define('characters', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  id_user: {
    type: _sequelize["default"].INTEGER
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  clase: {
    type: _sequelize["default"].TEXT
  },
  nivel: {
    type: _sequelize["default"].INTEGER
  },
  arma: {
    type: _sequelize["default"].TEXT
  },
  armadura: {
    type: _sequelize["default"].TEXT
  },
  botas: {
    type: _sequelize["default"].TEXT
  },
  guantes: {
    type: _sequelize["default"].TEXT
  },
  cinturon: {
    type: _sequelize["default"].TEXT
  },
  rankeado: {
    type: _sequelize["default"].BOOLEAN
  }
});

var _default = Char;
exports["default"] = _default;