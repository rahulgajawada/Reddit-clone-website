const mongoose = require('mongoose')

const facilitySchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: true
    },
    latitude:{
        type:Number,
        required: true
    },
    longitude:{
        type:Number,
        required:true
    },
    maximumOccupancy:{
        type: Number,
        required: true
    }
})

const Facility = new mongoose.model('Facility', facilitySchema)

module.exports = Facility