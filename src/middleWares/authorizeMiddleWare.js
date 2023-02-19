//get signup
module.exports.handleErrores = (err) => {
//    console.log('here')    
    let error = { email: '', password: '' }
    // incoorect email
    if (err.message === 'incorrect email') {
    
        error.email = 'that email is not registered'
    }
    // incoorect password
    if (err.message === 'incorrect password') {
        
        error.password = 'wrong password'
    }
    
    if(err.message==='dublicated email'){
        //console.log('here')
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
