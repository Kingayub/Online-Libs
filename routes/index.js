const { Router } = require("express")
const route = Router()
const genresRoute = require('./genres.route')
const revievsRoute = require('./revievs.route')
const clientsRoute = require('./clients.route')
const booksRoute = require('./books.route')

route.use(genresRoute)
route.use(revievsRoute)
route.use(clientsRoute)
route.use(booksRoute)

module.exports = route