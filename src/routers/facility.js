const express = require('express')
const router = new express.Router()
const Facility = require('../models/facility1')


//Creating a post
// router.post('/api/posts/:id', async (req,res) => {
//     const id = req.params.id
//     const post = new Post({
//         ...req.body,
//         CreatedBy: id
//     })
//     try{
//         await post.save()
//         res.status(201).send(post)
//     }catch(e){
//         res.status(500).send()
//     }
// })

// //Retrieving all the posts
// router.get('/api/posts', async (req,res) => {
//     // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//     const posts = await Post.find({})
//     res.send(posts)
// })

// //Retrieving all the posts from a subreddit
// router.get('/api/:subreddit', async (req, res) => {
//     const subreddit = req.params.subreddit
//     console.log(subreddit)
//     const posts = await Post.find({subreddit})
//     if(!posts)
//         throw new Error('No posts are found')
//     res.status(200).send(posts)
// })

// //Deleting post
// router.delete('/api/:id', async (req,res) => {
//     const _id = req.params.id
//     const post = await Post.find({_id})
//     if(!post)
//         throw new Error("post does not exist")
//     res.status(200).send(post)
// })
module.exports = router