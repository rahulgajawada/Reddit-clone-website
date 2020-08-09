const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content:{
        type: String
    },
    reply:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    PostReply:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
})

const Comment = new mongoose.model('Comment', commentSchema)

module.exports = Comment