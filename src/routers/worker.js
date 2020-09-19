const express = require('express')
const router = new express.Router()
const Worker = require('../models/worker1')

// Create a worker
router.post('/api/workers', async (req,res) => {
    const worker = new Worker(req.body)
    try{
        await worker.save()
        res.status(201).send({worker})
    }
    catch(e){
        res.status(500).send()
    }
})

//Retrieving workers
router.get('/api/workers', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    const workers = await User.find({})
    res.send(workers)
})

//Retrieving worker
router.get('/api/worker/:id', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    const workers = await User.find({_id: req.params.id})
    res.send(workers)
})

//Update worker
router.patch('/api/workers/:id',async (req,res) => {
    const _id = req.params.id
    const allowedUpdates = ["name","email","phone","equipment","shifts","latitude","longitude","available"]
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation)
        return res.status(400).send({error: "Invalid updates"})
    try{
        const worker = await Worker.findOne({_id, owner : req.user._id})
        
        if(!worker)
            return res.status(404).send()

        updates.forEach((update) => worker[update] = req.body[update])
        await worker.save()
        res.send(worker)
    }catch(e){
        res.status(500).send(e)
    }
})

//delete worker
router.delete('/api/workers/:id', async (req,res) => {
    try{
        // const task = await Task.findByIdAndDelete(req.params.id)
        const worker = await Worker.findOneAndDelete({_id:req.params.id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router