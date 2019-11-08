const mongoose = require('mongoose')

const blogpost = new mongoose.Schema({
    blogpost:{
        type: String,
        required:true
    },
    title:{
        type:String
    },
    image:{
        type:String//this should be a url
    },
    author:{
        type: String,
    },
    date:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports = {blogpost}