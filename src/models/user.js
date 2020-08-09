const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required: true
    },
    avatar:{
        type: Buffer
    }
    // tokens:{
    //     token:{
    //         type:String,
    //         required:true
    //     }
    // }
})

userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'owner'

})

const User = mongoose.model('User', userSchema)

module.exports = User