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


