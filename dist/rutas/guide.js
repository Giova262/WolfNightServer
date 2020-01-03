"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _guideController = require("../controllers/guideController");

var router = (0, _express.Router)();
/** Rutas */

router.get('/', _guideController.getGuides);
router.get('/:id', _guideController.getGuide);
router.post('/', _guideController.createGuide);
router["delete"]('/:id', _guideController.deleteGuide);
router.put('/:id', _guideController.updateGuide);
var _default = router;
exports["default"] = _default;