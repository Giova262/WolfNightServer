"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = require("../controllers/userController");

var router = (0, _express.Router)();
/** Rutas */

router.get('/', _userController.getUsers);
router.get('/:id', _userController.getUser);
router.get('/check/mail/:mail', _userController.checkMail);
router.get('/check/nickname/:nick', _userController.checkNickname);
router.get('/email/send/:msj', _userController.sendMails);
router.post('/', _userController.createUser);
router.post('/login', _userController.loginUser);
router["delete"]('/:id', _userController.deleteUser);
router.put('/', _userController.updateUser);
var _default = router;
exports["default"] = _default;