const express = require('express')
const router = express.Router()
const streetModel = require('../Models/speedModel')


router.get('/all', async (req, res) => {
    const streets = await streetModel.find()
    try {
        res.send(streets)
    }
    catch (err) {
        res.send(err)
    }

})

router.post('/add', async (req, res) => {

    const { streetName, firstLong, firstLat, lastLong, lastLat, maxSpeed } = req.body

    try {
        const street = await streetModel.create({ streetName, firstLong, firstLat, lastLong, lastLat, maxSpeed })

        res.status(201).send({ success: true, msg: 'street', data: street })
    } catch (err) {

        res.status(400).send(err)
    }
})




router.delete('/:streetName', async (req, res) => {
    const streetName = req.params.streetName
    const street = await streetModel.remove({ streetName: streetName })

    try {
        res.send(street)
    }
    catch (err) {
        res.send(err)
    }
})

router.put('/:streetName', async (req, res) => {
    const streetName = req.params.streetName

    const updatedStreet = await streetModel.updateOne(
        { streetName: streetName },
        {
            $set: req.body
        }
    )
    try {
        res.send(updatedStreet)
    }
    catch (err) {
        res.send(err)
    }

})

router.post('/:checkSpeed', async (req, res) => {

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
                    
                    res.status(200).send('sucess')
                }
                else {
                    res.status(404).send('this car speed  is max than max speed of this street')
                }
            }
            else {
                res.status(416).send('this car is not in the range')
            }

        }
    }
    catch (err) {
        res.send(err)
    }

})




module.exports = router