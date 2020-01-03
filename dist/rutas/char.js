"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _charController = require("../controllers/charController");

var router = (0, _express.Router)();
/** Rutas */

router.get('/', _charController.getChars);
router.get('/user/:id', _charController.getCharsByUser);
router.post('/', _charController.createChar);
router["delete"]('/:id', _charController.deleteChar);
router.put('/', _charController.updateChar);
var _default = router;
exports["default"] = _default;