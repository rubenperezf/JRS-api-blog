const mongoose = require('mongoose')

const newsletter = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
})

module.exports = {newsletter}