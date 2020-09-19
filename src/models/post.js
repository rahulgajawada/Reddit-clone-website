const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    CreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subreddit:{
        type:String,
        required: true,
    }
    // ,
    // upvotes:{
    //     type:Number,
    //     default: 0
    // }

})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post