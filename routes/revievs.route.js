const { Router } = require("express")
const { revievController } = require('../controllers/revievs.controllers')
const route = Router()

//ADMIN

route.get('/admin/revievs', revievController.getAllRevievs)
route.get('/admin/revievs/:id', revievController.getRevievById)
route.post('/admin/revievs', revievController.addReviev)
route.patch('/admin/revievs/:id', revievController.updateReviev)
route.delete('/admin/revievs/:id', revievController.deleteReviev)

//CLIENT

route.get('/revievs', revievController.getAllRevievs)
route.get('/revievs/:id', revievController.getRevievById)
route.post('/revievs', revievController.addReviev)
route.patch('/revievs/:id', revievController.updateReviev)
route.delete('/revievs/:id', revievController.deleteReviev)

module.exports = route