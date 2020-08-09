const express = require('express')
const router = new express.Router()
const Post = require('../models/post')

router.post('/api/posts/:id', async (req,res) => {
    const id = req.params.id
    const post = new Post({
        ...req.body,
        owner: id
    })
    try{
        await post.save()
        res.status(201).send(post)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/api/posts', async (req,res) => {
    const posts = await Post.find({})
    res.send(posts)
})

module.exports = router