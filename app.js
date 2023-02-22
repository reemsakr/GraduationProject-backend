const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const authRoutes=require('./src/Routes/userRoutes')
const streetRoutes=require('./src/Routes/speedRoutes')
const User = require('./src/Models/userModel')
const app=express()
app.use(express.json())


app.use('/streetSpeed', streetRoutes)

app.use('/Users',authRoutes)
app.listen(process.env.PORT||5000,()=>{
    console.log('the server is listening in port 5000')
})




mongoose.connect(process.env.DB, (err) => {
    if (err) return console.log(err.message)

    console.log('Database connected')

})

const Pusher = require('pusher')
const pusher = new Pusher({
    appId      : process.env.appId,
    key        : process.env.key,
    secret     : process.env.secret,
    cluster    : process.env.cluster,
    encrypted  : true,
})
const channel = 'User'


const changeStream = User.watch()
changeStream.on('change', async(change) => {
    
    console.log(change)

    if(change.operationType === 'update') {
        /*
        const check=await change.updateDescription.updatedFields.emergencyState

        if(check==true){
            const id=await change.documentKey._id.valueOf()
                        
            const user = await User.findById(id)
            
            
            const long = user.location.coordinates[0]
            const lat = user.location.coordinates[1]
            const users = await User.aggregate([
                {
                    $geoNear: {
                        near: { type: 'Point', coordinates: [parseFloat(long), parseFloat(lat)] },
                        key: 'location',
                        maxDistance: 10000,
                        distanceField:'dist.calculated',
                        spherical: true
    
                    }   
                },
                {
                    $project : { password : 0, tokens: 0 }
                }
            ])
            console.log(users)
            /*/
        pusher.trigger(
            channel,
            'updated', 
            // users
            'hello'
                    
        )
            
            
        //}
        
    }
})
