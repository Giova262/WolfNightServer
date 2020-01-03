"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getevents = getevents;
exports.createEvent = createEvent;
exports.getevent = getevent;
exports.deleteEvent = deleteEvent;
exports.updateEvent = updateEvent;

var _eventModel = _interopRequireDefault(require("../models/eventModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**Constante */
var atributos = ['name_user', 'titulo', 'time', 'descripcion'];
/** Traer todos los eventos */

function getevents(req, res) {
  var eventos;
  return regeneratorRuntime.async(function getevents$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_eventModel["default"].findAll());

        case 3:
          eventos = _context.sent;

          if (eventos) {
            res.status(200).json({
              message: "Todos los eventos son.",
              data: eventos,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "No hay eventos.",
              status: -1
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
/** Crea nuevo evento */


function createEvent(req, res) {
  var _req$body, name_user, titulo, time, descripcion, newEvent;

  return regeneratorRuntime.async(function createEvent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name_user = _req$body.name_user, titulo = _req$body.titulo, time = _req$body.time, descripcion = _req$body.descripcion;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_eventModel["default"].create({
            name_user: name_user,
            titulo: titulo,
            time: time,
            descripcion: descripcion
          }, {
            fields: atributos
          }));

        case 4:
          newEvent = _context2.sent;

          if (newEvent) {
            res.status(200).json({
              message: "Evento Creado Exitosamente.",
              data: newEvent,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "Error al crear Evento.",
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
/**Traer por id */


function getevent(req, res) {
  var id, eventFound;
  return regeneratorRuntime.async(function getevent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_eventModel["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'name_user', 'titulo', 'time', 'descripcion']
          }));

        case 4:
          eventFound = _context3.sent;

          if (eventFound) {
            res.status(200).json({
              message: "Evento encontrado.",
              data: eventFound,
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Evento no se encontro.",
              status: 0
            });
          }

          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
          res.status(500).json({
            message: _context3.t0,
            status: -1
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
/** Elimina un evento */


function deleteEvent(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteEvent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_eventModel["default"].destroy({
            where: {
              id: id
            }
          }).then(function (deletedRecord) {
            if (deletedRecord === 1) {
              res.status(200).json({
                message: "Evento se elimino correctamente.",
                status: 0
              });
            } else {
              res.status(200).json({
                message: "Evento no se encontro.",
                status: 1
              });
            }
          }));

        case 4:
          _context4.next = 10;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          res.status(500).json({
            message: _context4.t0,
            status: -1
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 6]]);
}
/** Actualiza un evento */


function updateEvent(req, res) {
  return regeneratorRuntime.async(function updateEvent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.json({
            message: "Evento Actualizado."
          });

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}