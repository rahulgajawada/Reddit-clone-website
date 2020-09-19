const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: true
    },
    latitude:{
        type:Number,
        required: true
    },
    longitude:{
        type:Number,
        required:true
    },
    maximumOccupancy:{
        type: Number,
        required: true
    }
})

const Comment = new mongoose.model('Comment', commentSchema)

module.exports = Comment