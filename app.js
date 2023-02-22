const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const authRoutes=require('./src/Routes/userRoutes')
const streetRoutes=require('./src/Routes/speedRoutes')

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
    appId      : '1558016',
    key        : '8f885166fac44cd34323',
    secret     : '4aba1f8309023e73bc5f',
    cluster    : 'mt1',
    encrypted  : true,
})
const channel = 'User'

const User = require('./src/Models/userModel')
//const taskCollection = process.env.DB.collection('User.')
const changeStream = User.watch()
changeStream.on('change', (change) => {
    console.log(change.fullDocumentBeforeChange)
    console.log(change.updateDescription.updatedFields.emergencyState)

    if(change.operationType === 'insert') {
        const task = change.fullDocument
        pusher.trigger(
            channel,
            'inserted', 
            {
                id: task._id,
                task: task.task,
            }
        ) 
    } else if(change.operationType === 'update') {
        const check=change.updateDescription.updatedFields.emergencyState
        const last=change.fullDocumentBeforeChange.emergencyState
        pusher.trigger(
            channel,
            'updated', 
            change.documentKey._id,
            check
            
        )
    }
})
