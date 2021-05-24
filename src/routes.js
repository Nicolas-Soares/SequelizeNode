const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express.Router()

routes.get('/users', UserController.read)
routes.post('/users', UserController.cadastrar)

routes.get('/users/:user_id/addresses', AddressController.read)
routes.post('/users/:user_id/addresses', AddressController.cadastrar)

module.exports = routes