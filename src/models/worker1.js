const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    equipment:{
        type: String,
        required: true
    },
    shifts:{
        type:String,
        required: true,
    },
    latitude:{
        type:Number,
        required: true
    },
    longitude:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    }
    
})
const Worker = new mongoose.model('Worker1', workerSchema)

module.exports = Worker

      // CreatedBy:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // ,
    // upvotes:{
    //     type:Number,
    //     default: 0
    // }