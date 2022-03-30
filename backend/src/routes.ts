import express from 'express'
import UserController from './controllers/UserController'
import UserMiddleware from './middlewares/UserMiddleware'

const routes = express.Router()
// routes.get('/', (req, res) => res.send('Hello world'))
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.get('/users/:id', UserMiddleware.validateId, UserController.indexUser)
routes.put('/users/:id', UserMiddleware.validateId, UserController.update)
routes.delete('/users/:id', UserMiddleware.validateId, UserController.delete)

export default routes
