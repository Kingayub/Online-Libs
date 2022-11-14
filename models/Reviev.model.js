const mongoose = require("mongoose")

const revievSchema = mongoose.Schema({
    revievAuthor: String,
    text: String,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
})

const Reviev = mongoose.model('Reviev', revievSchema)
module.exports = Reviev