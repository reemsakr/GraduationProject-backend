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


module.exports=router
