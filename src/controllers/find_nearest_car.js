const express = require('express')
const router = express.Router()
const carModel = require('../Models/Cars')
router.get('/:email', async (req, res) => {

    const email = req.params.email

    const car = await carModel.findOne({email:email})
    
    const long = car.location.coordinates[0]
    const lat = car.location.coordinates[1]


    try {
        const car =await carModel.aggregate([
            {
                $geoNear: {
                    near: { type: 'Point', coordinates: [parseFloat(long), parseFloat(lat)] },
                    key: 'location',
                    maxDistance: 5,
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