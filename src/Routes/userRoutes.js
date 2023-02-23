const {Router} = require('express')
const router=Router()
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const authContoller=require('../middleWares/authorizeMiddleWare')
const jwt= require('jsonwebtoken')
const verifyToken = require('../middleWares/verfyTokenMiddleWare')

router.get('/all', async (req, res) => {
    //await User.remove({})
    const users = await User.find()
    try {
        res.status(200).json({
            data:users
        })
        
    }
    catch (err) {
        res.status(400).json({
            data:err
        })
        
    }

})



router.post('/signup', async (req, res)=> {
    const { first_name, last_name, email, password } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPassword
        })
        const check = await User.findOne({ email: user.email })
        
        if (!check) {
            try {
                const save = await user.save()
                res.status(201).json({
                    data:save
                })
            }
            catch(err)
            {
                
                res.status(400).json({
                    data:err})
            }
        }
        else {
            
            throw Error('dublicated email')
        }
            
    }
    catch (err) {
        
        const errors =authContoller.handleErrores(err)
        res.status(400).json({
            data:errors
        })
    }
})



router.post('/login', async (req, res)=> {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        
        if (user) {
            
            const auth = await bcrypt.compare(password, user.password)
            if (auth) {
                
                var token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {expiresIn: '1d'})
                        
                

                
                res.status(200).json({
                    data: {
                        token:token
                    }       
                })
            }
            else  throw Error('incorrect password')
            
        }
        else throw Error('incorrect email')
        
        
    } catch (err) {
        const error = authContoller.handleErrores(err)
        res.status(400).json({ 
            data:error 
        })
    }
})
/*

router.post('/logout',verifyToken, async (req, res)=> {
    try{
        
        const token=req.headers.authorization.split(' ')[1]
        
        if(!token)
        {
            res.status(401).json({data:'Authorization fail !'})
        }
        
        await User.findByIdAndUpdate(req.user._id,{tokens:[]})
        res.status(200).json(
            {
                data:'logout successfully'
            }
        )
    }
    catch(err)
    {
        res.status(400).json({
            data:err
        })
    }
})

/*/


router.put('', verifyToken,async (req, res) => {
    
    const token = req.headers.authorization.split(' ')[1]
            
    const decode=jwt.verify(token, process.env.TOKEN_SECRET)
    
    const id = decode.id
    
    
    // eslint-disable-next-line no-unused-vars
    const updatedCar=await User.updateOne(
        { _id: id },
        {
            $set: req.body

        }
    )
    const user = await User.findById(id)
    
    const long = user.location.coordinates[0]
    const lat = user.location.coordinates[1]
    

    try {
    
        const users =await User.aggregate([
            {
                $geoNear: {
                    near: { type: 'Point', coordinates: [parseFloat(long), parseFloat(lat)] },
                    key: 'location',
                    maxDistance: 300,
                    distanceField:'dist.calculated',
                    spherical: true

                }   
            },
            {
                $project : { _id:0 , password : 0, tokens: 0 }
            }
        ])
    


        res.status(200).send(users)
    }
    catch (err) {
        
        res.status(400).json({
            data:err})
    }

})


module.exports=router
