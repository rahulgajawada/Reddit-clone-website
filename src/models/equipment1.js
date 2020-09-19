const mongoose = require('mongoose')

const equipmentSchema = new mongoose.Schema({
    equipmentName:{
        type: String,
        required: true
    },
    failure:{
        type: String,
        required: true
    },
    hoursToFix:{
        type:Number,
        required: true
    },
    fac1:{
        type: Number,
        required: true
    },
    fac2:{
        type: Number,
        required: true
    },
    fac3:{
        type: Number,
        required: true
    },
    fac4:{
        type: Number,
        required: true
    },
    fac5:{
        type: Number,
        required: true
    }
    
})
const Equipment = new mongoose.model('Worker', equipmentSchema)

module.exports = Equipment