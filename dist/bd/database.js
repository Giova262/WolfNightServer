"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('postgres://zkjfmjgzrirlmg:138e2683ed33022f41c1c697a58d15030e4c8f826136ca37b0426ee14ae26d97@ec2-174-129-254-250.compute-1.amazonaws.com:5432/d23qu9vnqu091i', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;
sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the Database:', err);
});