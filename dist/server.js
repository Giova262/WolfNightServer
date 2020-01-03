"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _user = _interopRequireDefault(require("./rutas/user"));

var _char = _interopRequireDefault(require("./rutas/char"));

var _event = _interopRequireDefault(require("./rutas/event"));

var _guide = _interopRequireDefault(require("./rutas/guide"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
/**Configuracion del Puerto */

app.set('port', process.env.PORT || 5000);
/*cors*/

app.use((0, _cors["default"])());
/**Middleworks */

app.use((0, _express.json)());
/**Rutas */

app.use('/api/user', _user["default"]);
app.use('/api/char', _char["default"]);
app.use('/api/event', _event["default"]);
app.use('/api/guide', _guide["default"]);
/** Ruta por Defecto */

app.get('/', function (req, res) {
  var msj = "WolfNight Server Online en puerto ";
  res.json(msj + app.get('port'));
});
var _default = app;
exports["default"] = _default;