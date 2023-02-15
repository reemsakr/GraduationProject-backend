const jwt=require('jsonwebtoken')
const  User  = require('../Models/userModel')


const verifyToken=async(req,res,next)=>{
    try {
        if(req.headers&&req.headers.authorization)
        {
            //const authorizationHeader = req.headers.authorization
            
            const token = req.headers.authorization.split(' ')[1]
            
            const decode=jwt.verify(token, process.env.TOKEN_SECRET)
            
            const user=await User.findById(decode.id)
            
            if(!user) 
            {
                
                res.status(401)
                res.json('Access denied, invalid token')
            }
            req.user=user

            next()
        }
        else 
        {
            
            res.status(401)
            res.json('Access denied, invalid token')
        }
        
        
        
    } catch(err) {
        
        res.status(400)
        res.json(err)
        return
    }
}

module.exports =verifyToken