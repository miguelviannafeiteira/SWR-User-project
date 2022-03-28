"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _UserMiddleware = require('./middlewares/UserMiddleware'); var _UserMiddleware2 = _interopRequireDefault(_UserMiddleware);

const routes = _express2.default.Router()
// routes.get('/', (req, res) => res.send('Hello world'))
routes.get('/users', _UserController2.default.index)
routes.post('/users', _UserController2.default.store)
routes.put('/users/:id', _UserMiddleware2.default.validateId, _UserController2.default.update)
routes.delete('/users/:id', _UserMiddleware2.default.validateId, _UserController2.default.delete)

exports. default = routes
