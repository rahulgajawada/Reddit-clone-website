const express = require('express')
const router = new express.Router()
const User = require('../models/user')

//Create a user
// router.post('/api/users', async (req,res) => {
//     const user = new User(req.body)
//     try{
//         await user.save()
//         res.status(201).send({user})
//     }
//     catch(e){
//         res.status(500).send()
//     }
// })
//Retrieving users
router.get('/api/users', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    const users = await User.find({})
    res.send(users)
})



module.exports = router