const {Router} = require('express')
const router=Router()
const bcrypt = require('bcrypt')
const User = require('../Models/userModel')
const authContoller=require('../controllers/authControllers')



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
        const save = await user.save()
        //const user = await User.create({ first_name, last_name, email, password })

        res.status(201).send({ success: true, msg: 'user', data: save })
    } catch (err) {
        const errors =authContoller.handleErrores(err)
        res.status(400).json({ errors })
    }
})



router.post('/login', async (req, res)=> {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            const auth = await bcrypt.compare(password, user.password)
            if (auth) {
                res.status(200).json({ success: true, msg: 'user', data: user })
            }
            else  res.send('incorrect password')
        }
        else res.send('incorrect email')

        
        
    } catch (err) {
        const error = authContoller.handleErrores(err)
        res.status(400).json({ error })
    }
})




module.exports=router
