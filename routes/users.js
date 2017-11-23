
const express = require('express')
const router = express.Router()

const User = require('../models/user')

//register
router.post('/register', (req, res, next) => {
    //get user details from req body 
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    
    // check if username or email exists

    //add user
    User.createUser(newUser, (err, user) => {
        if(err){
            res.json({ success: false, msg: 'Failed to register user'})
        } else {
            res.json({success: true, msg: 'User registered successfully'})
        }
    })

})

//authenticate
router.post('/authenticate', (req, res, next) => {
    res.json({ success: false, msg: 'Password did not match'})
})


//get
router.get('/profile', (req,res, next) => {
    res.send('heres yer profile')
})


module.exports = router