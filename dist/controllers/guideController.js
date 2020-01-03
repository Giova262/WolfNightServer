"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuides = getGuides;
exports.createGuide = createGuide;
exports.getGuide = getGuide;
exports.deleteGuide = deleteGuide;
exports.updateGuide = updateGuide;

var _guideModel = _interopRequireDefault(require("../models/guideModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**Constante */
var atributos = ['id', 'id_user', 'titulo', 'url', 'descripcion', 'categoria'];
/** Traer todas las guias */

function getGuides(req, res) {
  var guides;
  return regeneratorRuntime.async(function getGuides$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_guideModel["default"].findAll({
            attributes: atributos
          }));

        case 3:
          guides = _context.sent;

          if (guides) {
            res.status(200).json({
              message: "Todas las publicaciones son.",
              data: guides,
              status: 0
            });
          } else {
            res.status(200).json({
              message: "No hay publicaciones",
              data: guides,
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
/** Crea nueva Guia */


function createGuide(req, res) {
  var _req$body, id_user, titulo, url, descripcion, categoria, newGuide;

  return regeneratorRuntime.async(function createGuide$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, id_user = _req$body.id_user, titulo = _req$body.titulo, url = _req$body.url, descripcion = _req$body.descripcion, categoria = _req$body.categoria;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_guideModel["default"].create({
            id_user: id_user,
            titulo: titulo,
            url: url,
            descripcion: descripcion,
            categoria: categoria
          }, {
            fields: ['id_user', 'titulo', 'url', 'descripcion', 'categoria']
          }));

        case 4:
          newGuide = _context2.sent;

          if (newGuide) {
            res.status(200).json({
              message: "Guia publicada Exitosamente.",
              data: newGuide,
              status: 0
            });
          } else {
            res.status(400).json({
              message: "Error al crea Guia.",
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


function getGuide(req, res) {
  var id, guideFound;
  return regeneratorRuntime.async(function getGuide$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_guideModel["default"].findOne({
            where: {
              id: id
            },
            attributes: atributos
          }));

        case 4:
          guideFound = _context3.sent;

          if (guideFound) {
            res.status(200).json({
              message: "Guia encontrada.",
              data: guideFound,
              status: 1
            });
          } else {
            res.status(200).json({
              message: "Guia no se encontrada.",
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
/** Elimina un Guia */


function deleteGuide(req, res) {
  return regeneratorRuntime.async(function deleteGuide$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.json({
            message: "Guia Borrada."
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}
/** Actualiza un Guia */


function updateGuide(req, res) {
  return regeneratorRuntime.async(function updateGuide$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.json({
            message: "Guia Actualizada."
          });

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}