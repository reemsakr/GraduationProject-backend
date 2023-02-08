
const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
},{ _id : false })
const Cars = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    location: {
        type: pointSchema,
        required: true,
    }
})


Cars.index({ location: '2dsphere' })
module.exports = mongoose.model('Cars', Cars) //table name,shema
