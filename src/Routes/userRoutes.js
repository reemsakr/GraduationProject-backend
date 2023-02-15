const {Router} = require('express')
const router=Router()
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const authContoller=require('../middleWares/authorizeMiddleWare')
const jwt= require('jsonwebtoken')
const verifyToken = require('../middleWares/verfyTokenMiddleWare')

router.post('/signup', async (req, res)=> {
    const { first_name, last_name, email, password } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPassword,
        })
        user.save()
        
        const userInfo={
                    
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password:user.password
        }

        res.status(201).json({
            data:{
                user:userInfo
            }
        })
    } catch (err) {
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
                

                let oldTokens=user.tokens||[]
                
                if(oldTokens.length)
                {
                    oldTokens=oldTokens.filter(t=>{
                        const timeDiff=(Date.now()-parseInt(t.signedAt))/1000
                        if(timeDiff<86400)//24*60*60 s
                        {
                            return t
                        }

                    })
                }
                
                await User.findByIdAndUpdate(user._id,{tokens:[...oldTokens,{token,
                    signedAt:Date.now().toString()}]})

                const userInfo={
                    
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
        
                }
                res.status(200).json({
                    data: {
                        user:userInfo,
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


router.post('/logout',verifyToken, async (req, res)=> {
    try{
        
        const token=req.headers.authorization.split(' ')[1]
        
        if(!token)
        {
            res.status(401).json({data:'Authorization fail !'})
        }
        const tokens=req.user.tokens
        const newTokens=tokens.filter(t=>t.token!=token)
        await User.findByIdAndUpdate(req.user._id,{tokens:newTokens})
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







module.exports=router
