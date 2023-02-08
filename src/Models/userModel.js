const mongoose = require('mongoose')
const { isEmail } = require('validator')

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

const User = mongoose.model('User', userSchmea)
module.exports = User
