const mongoose = require('mongoose')
const streetSchmea = new mongoose.Schema({
    streetName: {
        type: String,
        required: [true],
        unique: true,
        minlength: [3]
    },
    firstLong:{
        type:Number,
        required:[true],
        unique:true
    },
    firstLat:{
        type:Number,
        required:[true],
        unique:true
    },
    lastLong:{
        type:Number,
        required:[true],
        unique:true
    },
    lastLat:{
        type:Number,
        required:[true],
        unique:true
    },
    maxSpeed:{
        type:Number,
        required:[true]
    }
    
})



module.exports = mongoose.model('streetSpeed', streetSchmea) //table name,shema

