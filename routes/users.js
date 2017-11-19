const express = require('express')
const router = express.Router()

//register

//authenticate
router.post('/authenticate', (req, res, next) => {
    res.json({ success: false, msg: 'Password did not match'})
})


//get
router.get('/profile', (req,res, next) => {
    res.send('heres yer profile')
})


module.exports = router