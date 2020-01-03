"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChars = getChars;
exports.getCharsByUser = getCharsByUser;
exports.createChar = createChar;
exports.deleteChar = deleteChar;
exports.updateChar = updateChar;

var _charModel = _interopRequireDefault(require("../models/charModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Traer todos los personajes */
function getChars(req, res) {
  var chars;
  return regeneratorRuntime.async(function getChars$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_charModel["default"].findAll({
            attributes: ['id', 'id_user', 'nombre', 'clase', 'nivel', 'arma', 'armadura', 'botas', 'guantes', 'cinturon', 'rankeado']
          }));

        case 3:
          chars = _context.sent;

          if (chars) {
            res.status(200).json({
              message: "Todos los usuarios registrados son.",
              data: chars,
              status: 0
            });
          } else {
            res.status(200).json({
              message: "No hay usuarios registrados",
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
/** Trae personajes por id de usuario */


function getCharsByUser(req, res) {
  var id, chars;
  return regeneratorRuntime.async(function getCharsByUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_charModel["default"].findAll({
            where: {
              id_user: id
            },
            attributes: ['id', 'id_user', 'nombre', 'clase', 'nivel', 'arma', 'armadura', 'botas', 'guantes', 'cinturon', 'rankeado']
          }));

        case 4:
          chars = _context2.sent;

          if (chars) {
            res.status(200).json({
              message: "Personajes del usuario.",
              data: chars,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "No hay personajes para ese usuario.",
              status: -1
            });
          }

          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          res.status(500).json({
            message: _context2.t0,
            status: -1
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/** Crea nuevo Personajes */


function createChar(req, res) {
  var _req$body, id_user, nombre, clase, nivel, arma, armadura, botas, guantes, cinturon, rankeado, newChar;

  return regeneratorRuntime.async(function createChar$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, id_user = _req$body.id_user, nombre = _req$body.nombre, clase = _req$body.clase, nivel = _req$body.nivel, arma = _req$body.arma, armadura = _req$body.armadura, botas = _req$body.botas, guantes = _req$body.guantes, cinturon = _req$body.cinturon, rankeado = _req$body.rankeado;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_charModel["default"].create({
            id_user: id_user,
            nombre: nombre,
            clase: clase,
            nivel: nivel,
            arma: arma,
            armadura: armadura,
            botas: botas,
            guantes: guantes,
            cinturon: cinturon,
            rankeado: rankeado
          }, {
            fields: ['id_user', 'nombre', 'clase', 'nivel', 'arma', 'armadura', 'botas', 'guantes', 'cinturon', 'rankeado']
          }));

        case 4:
          newChar = _context3.sent;

          if (newChar) {
            res.status(200).json({
              message: "Personaje Creado Exitosamente.",
              id: newChar.id,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "Error al crear Personaje.",
              status: -1
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
/** Elimina un personaje */


function deleteChar(req, res) {
  return regeneratorRuntime.async(function deleteChar$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.json({
            message: "Personaje Borrado."
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}
/** Actualiza un personaje */


function updateChar(req, res) {
  var _req$body2, id, id_user, nombre, clase, nivel, arma, armadura, botas, guantes, cinturon, rankeado;

  return regeneratorRuntime.async(function updateChar$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log('actualiznado');
          _req$body2 = req.body, id = _req$body2.id, id_user = _req$body2.id_user, nombre = _req$body2.nombre, clase = _req$body2.clase, nivel = _req$body2.nivel, arma = _req$body2.arma, armadura = _req$body2.armadura, botas = _req$body2.botas, guantes = _req$body2.guantes, cinturon = _req$body2.cinturon, rankeado = _req$body2.rankeado;
          _context6.prev = 2;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_charModel["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'id_user', 'nombre', 'clase', 'nivel', 'arma', 'armadura', 'botas', 'guantes', 'cinturon', 'rankeado']
          }).then(function _callee(_char) {
            var charChanged;
            return regeneratorRuntime.async(function _callee$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return regeneratorRuntime.awrap(_char.update({
                      id: id,
                      id_user: id_user,
                      nombre: nombre,
                      clase: clase,
                      nivel: nivel,
                      arma: arma,
                      armadura: armadura,
                      botas: botas,
                      guantes: guantes,
                      cinturon: cinturon,
                      rankeado: rankeado
                    }));

                  case 2:
                    charChanged = _context5.sent;

                    if (charChanged) {
                      res.status(200).json({
                        message: 'El personaje se actualizo.',
                        data: charChanged,
                        status: 0
                      });
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          }));

        case 5:
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](2);
          res.status(500).json({
            message: _context6.t0,
            status: -1
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[2, 7]]);
}