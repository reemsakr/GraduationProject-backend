const {Router} = require('express')
const router=Router()
const authContoller=require('../controllers/authControllers')

router.post('/signup',authContoller.signup_post)

router.post('/login',authContoller.login_post)

module.exports=router
