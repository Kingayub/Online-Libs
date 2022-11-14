const { Router } = require("express")
const { genreController } = require('../controllers/genres.controllers')
const route = Router()

//ADMIN

route.get('/admin/genres', genreController.getAllGenres)
route.get('/admin/genres/:id', genreController.getBooksByGenre)
route.post('/admin/genres', genreController.addGenre)
route.delete('/admin/genres', genreController.removeGenre)

//CLIENT

route.get('/genres', genreController.getAllGenres)
route.get('/genres/:id', genreController.getBooksByGenre)

module.exports = route
