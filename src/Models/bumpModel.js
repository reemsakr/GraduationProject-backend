
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

const bumpSchmea = new mongoose.Schema({
    
    location: {
        type: pointSchema
        
    },
    feedbackCounter:{
        type:Number,
        default:1
    }
})
bumpSchmea.index({ location: '2dsphere' })
const Bump = mongoose.model('Bump', bumpSchmea)
module.exports = Bump
