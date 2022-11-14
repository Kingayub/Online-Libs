const { Router } = require("express")
const { bookController } = require('../controllers/books.controllers')
const route = Router()


//ADMIN 

route.get('/admin/books', bookController.getAllBooks)
route.get('/admin/books/:id', bookController.getBooksByGenre)
route.get('/admin/books/byId/:id', bookController.getBookById)
route.post('/admin/books/', bookController.addBook)
route.patch('/admin/books/addreviev/:id', bookController.addReviev)
route.delete('/admin/books/:id', bookController.deleteBook)
route.patch("/admin/:clientId/:bookId/banned", bookController.goToBan)

//CLIENT

route.get('/books', bookController.getAllBooks)
route.get('/books/:id', bookController.getBooksByGenre)
route.get('/books/byId/:id', bookController.getBookById)
route.patch('/books/addreviev/:id', bookController.addReviev)

module.exports = route