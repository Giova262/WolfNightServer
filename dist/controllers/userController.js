"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUser = getUser;
exports.checkNickname = checkNickname;
exports.checkMail = checkMail;
exports.loginUser = loginUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.sendMails = sendMails;

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**Constante */
var atributos = ['id', 'nickname', 'mail', 'pass', 'foto', 'L', 'M', 'MI', 'J', 'V', 'S', 'D', 'HL', 'HM', 'HMI', 'HJ', 'HV', 'HS', 'HD', 'token'];
/** Traer todos los usuarios */

function getUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findAll({
            attributes: ['id', 'nickname', 'foto', 'L', 'M', 'MI', 'J', 'V', 'S', 'D', 'HL', 'HM', 'HMI', 'HJ', 'HV', 'HS', 'HD']
          }));

        case 3:
          users = _context.sent;

          if (users) {
            res.status(200).json({
              message: "Todos los usuarios registrados son.",
              data: users,
              status: 0
            });
          } else {
            res.status(200).json({
              message: "No hay usuarios registrados",
              data: users,
              status: 1
            });
          }

          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: _context.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
/** Crea nuevo usuario */


function createUser(req, res) {
  var _req$body, nickname, mail, pass, foto, L, M, MI, J, V, S, D, HL, HM, HMI, HJ, HV, HS, HD, token, newUser, newtoken;

  return regeneratorRuntime.async(function createUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nickname = _req$body.nickname, mail = _req$body.mail, pass = _req$body.pass, foto = _req$body.foto, L = _req$body.L, M = _req$body.M, MI = _req$body.MI, J = _req$body.J, V = _req$body.V, S = _req$body.S, D = _req$body.D, HL = _req$body.HL, HM = _req$body.HM, HMI = _req$body.HMI, HJ = _req$body.HJ, HV = _req$body.HV, HS = _req$body.HS, HD = _req$body.HD, token = _req$body.token;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].create({
            nickname: nickname,
            mail: mail,
            pass: pass,
            foto: foto,
            L: L,
            M: M,
            MI: MI,
            J: J,
            V: V,
            S: S,
            D: D,
            HL: HL,
            HM: HM,
            HMI: HMI,
            HJ: HJ,
            HV: HV,
            HS: HS,
            HD: HD,
            token: token
          }, {
            fields: ['nickname', 'mail', 'pass', 'foto', 'L', 'M', 'MI', 'J', 'V', 'S', 'D', 'HL', 'HM', 'HMI', 'HJ', 'HV', 'HS', 'HD', 'token']
          }));

        case 4:
          newUser = _context2.sent;

          if (newUser) {
            newtoken = _jsonwebtoken["default"].sign({
              newUser: newUser
            }, 'kawabonga', {
              expiresIn: 60 * 60 * 24 // expires in 24 hours

            });
            res.status(200).json({
              message: "Usuario Creado Exitosamente.",
              data: newUser,
              token: newtoken,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "Error al crear Usuario.",
              status: -1
            });
          }

          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/**Traer por id */


function getUser(req, res) {
  var id, userFound;
  return regeneratorRuntime.async(function getUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'nickname', 'foto', 'L', 'M', 'MI', 'J', 'V', 'S', 'D', 'HL', 'HM', 'HMI', 'HJ', 'HV', 'HS', 'HD']
          }));

        case 4:
          userFound = _context3.sent;

          if (userFound) {
            res.status(200).json({
              message: "Usuario encontrado.",
              data: userFound,
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Usuario no se encontrado.",
              status: 0
            });
          }

          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            message: _context3.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/**Chequear nickname si existe*/


function checkNickname(req, res) {
  var nick, userFound;
  return regeneratorRuntime.async(function checkNickname$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          nick = req.params.nick;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            where: {
              nickname: nick
            },
            attributes: atributos
          }));

        case 4:
          userFound = _context4.sent;

          if (userFound) {
            res.status(200).json({
              message: "Usuario encontrado.",
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Usuario no se encontrado.",
              status: 0
            });
          }

          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: _context4.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/** Chequear mail si existe  */


function checkMail(req, res) {
  var mail, userFound;
  return regeneratorRuntime.async(function checkMail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          mail = req.params.mail;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            where: {
              mail: mail
            },
            attributes: atributos
          }));

        case 4:
          userFound = _context5.sent;

          if (userFound) {
            res.status(200).json({
              message: "Usuario encontrado.",
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Usuario no se encontrado.",
              status: 0
            });
          }

          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: _context5.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/** Chequear nombre de usuario */


function loginUser(req, res) {
  var _req$body2, mail, pass, userFound, token;

  return regeneratorRuntime.async(function loginUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, mail = _req$body2.mail, pass = _req$body2.pass;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            where: {
              mail: mail,
              pass: pass
            },
            attributes: atributos
          }));

        case 4:
          userFound = _context6.sent;

          if (userFound) {
            token = _jsonwebtoken["default"].sign({
              userFound: userFound
            }, 'kawabonga', {
              expiresIn: 60 * 60 * 24 // expires in 24 hours

            });
            res.status(200).json({
              message: "Usuario encontrado.",
              data: userFound,
              token: token,
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Usuario no se encontrado.",
              status: 0
            });
          }

          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json({
            message: _context6.t0,
            status: -1
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/** Elimina un usuario */


function deleteUser(req, res) {
  return regeneratorRuntime.async(function deleteUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          res.json({
            message: "Usuario Borrado."
          });

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
}
/** Actualiza un usuario */


function updateUser(req, res) {
  var _req$body3, id, nickname, mail, pass, foto, L, M, MI, J, V, S, D, HL, HM, HMI, HJ, HV, HS, HD;

  return regeneratorRuntime.async(function updateUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _req$body3 = req.body, id = _req$body3.id, nickname = _req$body3.nickname, mail = _req$body3.mail, pass = _req$body3.pass, foto = _req$body3.foto, L = _req$body3.L, M = _req$body3.M, MI = _req$body3.MI, J = _req$body3.J, V = _req$body3.V, S = _req$body3.S, D = _req$body3.D, HL = _req$body3.HL, HM = _req$body3.HM, HMI = _req$body3.HMI, HJ = _req$body3.HJ, HV = _req$body3.HV, HS = _req$body3.HS, HD = _req$body3.HD;
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'nickname', 'mail', 'pass', 'foto', 'L', 'M', 'MI', 'J', 'V', 'S', 'D', 'HL', 'HM', 'HMI', 'HJ', 'HV', 'HS', 'HD']
          }).then(function _callee(user) {
            var userChanged;
            return regeneratorRuntime.async(function _callee$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return regeneratorRuntime.awrap(user.update({
                      nickname: nickname,
                      mail: mail,
                      pass: pass,
                      foto: foto,
                      L: L,
                      M: M,
                      MI: MI,
                      J: J,
                      V: V,
                      S: S,
                      D: D,
                      HL: HL,
                      HM: HM,
                      HMI: HMI,
                      HJ: HJ,
                      HV: HV,
                      HS: HS,
                      HD: HD
                    }));

                  case 2:
                    userChanged = _context8.sent;

                    if (userChanged) {
                      res.status(200).json({
                        message: 'El usuario se actualizo.',
                        data: userChanged,
                        status: 0
                      });
                    }

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            });
          }));

        case 4:
          _context9.next = 9;
          break;

        case 6:
          _context9.prev = 6;
          _context9.t0 = _context9["catch"](1);
          res.status(500).json({
            message: _context9.t0,
            status: -1
          });

        case 9:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 6]]);
}
/**Enviando mails */


function sendMails(req, res) {
  var msj, transporter, users, lista, mailOptions;
  return regeneratorRuntime.async(function sendMails$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          msj = req.params.msj;
          transporter = _nodemailer["default"].createTransport({
            service: 'gmail',
            secure: false,
            // use SSL
            port: 25,
            // port for secure SMTP
            auth: {
              user: 'TeraWolfNight@gmail.com',
              pass: 'CRQCNE2uqi'
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          _context10.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findAll({
            attributes: ['nickname', 'mail']
          }));

        case 4:
          users = _context10.sent;
          lista = [];
          users.map(function (e, i) {
            lista.push(e.mail);
          });
          mailOptions = {
            from: 'TeraWolfNight@gmail.com',
            // sender address
            to: lista,
            // list of receivers
            subject: 'Evento Finalizado',
            // Subject line
            html: '<p>' + msj + '</p>' // plain text body

          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) console.log(err);else {
              console.log(info);
              res.status(200).json({
                message: 'Mails enviados',
                status: -1
              });
            }
          });

        case 9:
        case "end":
          return _context10.stop();
      }
    }
  });
}