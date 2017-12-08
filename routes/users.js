
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')

const User = require('../models/user')
const config = require('../config/db')

//register
router.post('/register', (req, res, next) => {
    //get user details from req body 
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })


    //add user
    User.createUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: err.message })
        } else {
            res.json({ success: true, msg: 'User registered successfully' })
        }
    })
})

//authenticate
router.post('/authenticate', (req, res, next) => {
    let username = req.body.username
    let enteredPassword = req.body.password

    let user = User.getUserByUsername(username, (err, user) => {
        if (err) {
            res.send({ success: false, msg: 'username error' })
            handleError(err)
            return
        }

        if (!user) {
            res.send({ success: false, msg: 'username not found' })
        } else {
            User.comparePassword(enteredPassword, user.password, (err, isMatch) => {
                if (err) {
                    res.send({ success: false, msg: 'password error' }) //handleErrod(err)?
                    handleError(err)
                    return
                }
                if (isMatch) {
                    //token
                    const token = jwt.sign({ data: user }, config.secret, { expiresIn: 3600 })
                    console.log(token)
                    res.send({
                        success: true,
                        msg: 'login successful',
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    })
                } else {
                    res.send({ success: false, msg: 'password did not match' })
                }
            })
        }
    })
})

//get
//TODO application should not crash if passport auth fails
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.send('heres yer profile')
})

function handleError(err) {
    console.log(err)
}

module.exports = router