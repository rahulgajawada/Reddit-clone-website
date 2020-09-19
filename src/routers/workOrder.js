const express = require('express')
const router = new express.Router()
const WorkOrder = require('../models/workOrder1')

// Create a worker
router.post('/api/workOrder', async (req,res) => {
    const order = new Worker(req.body)
    try{
        await order.save()
        res.status(201).send({order})
    }
    catch(e){
        res.status(500).send()
    }
})

//Retrieving orders
router.get('/api/workOrder', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    const orders = await User.find({})
    res.send(orders)
})

//Retrieving worker
router.get('/api/workOrder/:id', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    const order = await User.find({_id: req.params.id})
    res.send(order)
})

//Update worker
router.patch('/api/workOrder/:id',async (req,res) => {
    const _id = req.params.id
    const allowedUpdates = ["facility","equipment","equipmentID","priority","timeToComplete","submissionTimeStamp"]
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation)
        return res.status(400).send({error: "Invalid updates"})
    try{
        const order = await WorkOrder.findOne({_id, owner : req.user._id})
        
        if(!order)
            return res.status(404).send()

        updates.forEach((update) => order[update] = req.body[update])
        await order.save()
        res.send(order)
    }catch(e){
        res.status(500).send(e)
    }
})

//delete worker
router.delete('/api/workOrder/:id', async (req,res) => {
    try{
        // const task = await Task.findByIdAndDelete(req.params.id)
        const order = await WorkOrder.findOneAndDelete({_id:req.params.id})
        if(!worker){
            return res.status(404).send()
        }
        res.send(worker)
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router