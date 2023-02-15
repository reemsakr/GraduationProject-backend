const express = require('express')
const router = express.Router()
const carModel = require('../Models/carMode')
const verifyToken=require('../middleWares/verfyTokenMiddleWare')

router.get('/all', async (req, res) => {
    //await carModel.remove({})
    const cars = await carModel.find()
    try {
        res.status(200).json({
            data:cars
        })
        
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
        
    }

})

router.post('/add',verifyToken, async (req, res) => {

    const car = new carModel({
        email: req.body.email,
        location: req.body.location
    })

    const check = await carModel.findOne({ email: car.email })
    try {
        if (!check) {
            const save = await car.save()
            try {
                res.status(201).json({
                    data:save
                })
                
            }
            catch (err) {
                res.status(400).json({
                    data:err
                })
            }
        }
        else{
            try {
                
                res.status(400).json({
                    data:{
                        msg:'this email is signed before',
                        car:check
                    }
                })
            }
            catch (err) {
                res.status(400).json({
                    data:err
                })
            }
            
        }
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }

})




router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const car = await carModel.remove({ _id: id })

    try {
        res.status(200).json({
            data:car
        })
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }
})

router.put('/:id',verifyToken, async (req, res) => {
    const id = req.params.id

    
    // eslint-disable-next-line no-unused-vars
    const updatedCar=await carModel.updateOne(
        { _id: id },
        {
            $set: req.body

        }
    )
    
    const car = await carModel.findOne({_id:id})
    
    const long = car.location.coordinates[0]
    const lat = car.location.coordinates[1]


    try {
        const car =await carModel.aggregate([
            {
                $geoNear: {
                    near: { type: 'Point', coordinates: [parseFloat(long), parseFloat(lat)] },
                    key: 'location',
                    maxDistance: 1,
                    distanceField:'dist.calculated',
                    spherical: true

                }
            }
        ])

        res.status(200).send(car)
    }
    catch (err) {
        res.status(400).send(err)
    }

})


module.exports = router