const {Router} = require('express')
const router=Router()
const jwt= require('jsonwebtoken')
const redis=require('redis')
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


//const client=redis.createClient(process.env.REDISURL)
const client = redis.createClient({
    host: 'redis-15412.c226.eu-west-1-3.ec2.cloud.redislabs.com',
    port: 15412
})
client.connect()
client.on('connect', function() {
    console.log('redis Connected!')
})



router.post('/checkBumps', verifyToken,async (req, res) => {

    const { location} = req.body
    const long = location.coordinates[0]
    const lat = location.coordinates[1]
    try {
        
        const cachedBumpm=await client.get(JSON.stringify(location))
        
        if(cachedBumpm)
        {
            
            res.status(200).send(
                (JSON.parse(cachedBumpm)).Bumps)
        }
        else 
        {
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
            const  result={
                'Bumps':Bumps
            }
            client.set(JSON.stringify(location),JSON.stringify(result))
            client.expire(JSON.stringify(location),60*60*24)
            res.status(200).send(result.Bumps)
        }
        
    } catch (err) {

        res.status(400).json({
            data:err
        })
    }
})


router.put('/', verifyToken,async (req, res) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
            
        jwt.verify(token, process.env.TOKEN_SECRET)
    
        const id = req.body.bumpId  
        const bump = await Bump.findById(id)
        if(!bump)
        {
            res.status(402).json({
                'data':'Not Found'
            })
        }
        const flag=req.body.flag
        if(flag=='true')
        {
            
            // eslint-disable-next-line no-unused-vars
            const updatedBump=await Bump.updateOne(
                { _id: id },
                {
                    $inc: {feedbackCounter:1}
                
                }
            )
            
        }
        else{
            await Bump.updateOne(
                { _id: id },
                {
                    $inc: {feedbackCounter:-1}
                }
            )
            if(bump.feedbackCounter==2)
            {
                
                bump.deleteOne({_id:id})
            }
        }
        
        
        
        res.status(200).json({
            data:'success'
        })
    
    }
    catch (err) {
        
        res.status(400).json({
            data:err})
    }

})



module.exports=router
