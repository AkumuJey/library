const mongoose = require('mongoose')

const authorSchemer = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchemer)