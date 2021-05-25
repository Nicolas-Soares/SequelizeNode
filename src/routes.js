const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.get('/users', UserController.read)
routes.post('/users', UserController.cadastrar)

routes.get('/users/:user_id/addresses', AddressController.read)
routes.post('/users/:user_id/addresses', AddressController.cadastrar)

routes.get('/users/:user_id/techs', TechController.read)
routes.post('/users/:user_id/techs', TechController.cadastrar)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes