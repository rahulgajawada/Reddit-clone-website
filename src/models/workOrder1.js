const mongoose = require('mongoose')

const workOrderSchema = new mongoose.Schema({
    facility:{
        type:String,
        required:true,
        trim:true
    },
    equipment:{
        type:String,
        required:true,
        trim:true
    },
    equipmentID:{
        type:Number,
        required: true
    },
    priority:{
        type: Number
    },
    timeToComplete:{
        type: Number,
        required: true
    },
    submissionTimeStamp:{
        type: String,
        required: true
    }
})

  // ,
    // password:{
    //     type: String,
    //     required: true,
    //     trim: true,
    //     minlength: 7
    // }
    // tokens:{
    //     token:{
    //         type:String,
    //         required:true
    //     }
    // }

// userSchema.virtual('posts', {
//     ref: 'Post',
//     localField: '_id',
//     foreignField: 'CreatedBy'

// })

const WorkOrder = mongoose.model('WorkOrder', workOrderSchema)

module.exports = WorkOrder