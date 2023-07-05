const express = require('express')
const router = express.Router()
const streetModel = require('../Models/streetSpeedModel')
const verifyToken=require('../middleWares/verfyTokenMiddleWare')

router.get('/', async (req, res) => {
    const streets = await streetModel.find()
    try {
        res.status(200).json({
            data:streets
        })
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }

})

router.post('/add', async (req, res) => {

    const { streetName, firstLong, firstLat, lastLong, lastLat, maxSpeed } = req.body

    try {
        const street = await streetModel.create({ streetName, firstLong, firstLat, lastLong, lastLat, maxSpeed })

        res.status(201).json({
            data:street
        })
    } catch (err) {

        res.status(400).json({
            data:err
        })
    }
})




router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const street = await streetModel.remove({ _id: id })

    try {
        res.status(200).json({
            data:street
        })
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id

    const updatedStreet = await streetModel.updateOne(
        { _id: id },
        {
            $set: req.body
        }
    )
    try {
        res.status(200).json({
            data:updatedStreet
        })
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }

})

router.post('/checkSpeed', verifyToken,async (req, res) => {

    const long = req.body.long
    const lat = req.body.lat
    const speed = req.body.speed
    const streets = await streetModel.find()

    try {

        for (let i = 0; i < streets.length; i++) {
            if (
                ((long >= streets[i].firstLong &&
                    long <= streets[i].lastLong) ||
                    (long <= streets[i].firstLong &&
                    long >= streets[i].lastLong)) && ((
                    lat >= streets[i].firstLat &&
                    lat <= streets[i].lastLat) || (lat <= streets[i].firstLat &&
                    lat >= streets[i].lastLat))) {
                
                if (speed <= streets[i].maxSpeed) {
                    
                    res.status(200).json({
                        data:'sucess'
                    })
                }
                else {
                    res.status(404).json({
                        data:'this car speed  is max than max speed of this street'
                    })
                }
            }
            

        }
        res.status(416).json({
            data:'this car is not in the range'
        })
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
    }

})




module.exports = router