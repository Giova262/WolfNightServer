"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _eventController = require("../controllers/eventController");

var router = (0, _express.Router)();
/** Rutas */

router.get('/', _eventController.getevents);
router.get('/:id', _eventController.getevent);
router.post('/', _eventController.createEvent);
router["delete"]('/:id', _eventController.deleteEvent);
router.put('/:id', _eventController.updateEvent);
var _default = router;
exports["default"] = _default;