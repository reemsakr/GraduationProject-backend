const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const carRoutes = require('./src/Routes/Cars')
const findRoutes=require('./src/controllers/find_nearest_car')

const app=express()
app.use(express.json())


app.use('/Cars', carRoutes)

app.use('/findNearestCar', findRoutes)

app.listen(process.env.PORT||5000,()=>{
    console.log('the server is listening in port 5000')
})

mongoose.connect(process.env.DB, (err) => {
    if (err) return console.log(err.message)

    console.log('Database connected')
})