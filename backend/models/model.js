const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    sender: {
        required: true,
        type: String
    },
    sum: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)