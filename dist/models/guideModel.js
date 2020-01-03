"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../bd/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Guide = _database.sequelize.define('guias', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  id_user: {
    type: _sequelize["default"].INTEGER
  },
  titulo: {
    type: _sequelize["default"].TEXT
  },
  url: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  categoria: {
    type: _sequelize["default"].TEXT
  }
});

var _default = Guide;
exports["default"] = _default;