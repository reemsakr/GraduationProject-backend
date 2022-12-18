//get signup
const User = require('../Models/Users')

const handleErrores = (err) => {
    console.log(err.message, err.code)
    let error = { email: '', password: '' }
    // incoorect email
    if (err.message === 'incorrect email') {
        error.email = 'that email is not registered'
    }
    // incoorect password
    if (err.message === 'incorrect password') {
        error.password = 'wrong password'
    }
    if (err.code === 11000) {
        error.email = 'that email is already registered'
        return error
    }
    // validation errors 
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message
        })
    }
    return error
}
module.exports.signup_post = async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    try {
        const user = await User.create({ first_name, last_name, email, password })
        
        res.status(201).send({ success: true, msg: 'user', data: user })
    } catch (err) {
        const errors = handleErrores(err)
        res.status(400).json({ errors })
    }
}
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        
        res.status(200).json({ success: true, msg: 'user', data: user })
    } catch (err) {
        const error = handleErrores(err)
        res.status(400).json({ error })
    }
}
