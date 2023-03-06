const {Router} = require('express')
const router=Router()

const Bump = require('../Models/bumpModel')

const verifyToken = require('../middleWares/verfyTokenMiddleWare')

router.get('/all', async (req, res) => {
    //await User.remove({})
    const bumps = await Bump.find()
    try {
        res.status(200).json({
            data:bumps
        })
        
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
        
    }

})

router.post('/add', verifyToken,async (req, res) => {

    const { location} = req.body

    try {
        const bump = await  Bump.create({ location })

        res.status(201).json({
            data:bump
        })
    } catch (err) {

        res.status(400).json({
            data:err
        })
    }
})

router.post('/checkBumps', verifyToken,async (req, res) => {

    const { location} = req.body
    const long = location.coordinates[0]
    const lat = location.coordinates[1]
    try {
        const Bumps =await Bump.aggregate([
            {
                $geoNear: {
                    near: { type: 'Point', coordinates: [parseFloat(long), parseFloat(lat)] },
                    key: 'location',
                    maxDistance: 300,
                    distanceField:'dist.calculated',
                    spherical: true

                }   
            }
        ])
        res.status(200).send(Bumps)
    } catch (err) {

        res.status(400).json({
            data:err
        })
    }
})



module.exports=router
