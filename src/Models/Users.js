const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
//const Joi = require('joi')
const userSchmea = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'please enter your first name'],
        //unique: true,
        minlength: [3, 'Minium first_name length is 3 letters']
        //validate:[isEmail,'Minium first_name length is 3 letters']
    },
    last_name: {
        type: String,
        required: [true, 'please enter your last name'],
        //unique: true,
        minlength: [3, 'Minium last_name length is 3 letters']
        //validate:[isEmail,'Minium last_name length is 3 letters']
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowcase: true,
        validate: [isEmail, 'Please enter a vaild email']
    },
    password: {
        type: String,
        required: [true, 'please enter an password'],
        minlength: [6, 'Minium password length is 6 characters']
    },
})

userSchmea.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)

    next()
})
//static method to login user
userSchmea.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}
const User = mongoose.model('user', userSchmea)
module.exports = User
