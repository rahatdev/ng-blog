const express = require('express')

const bodyParser = require('body-parser')
const path = require('path')

const cors = require('cors')
const passport = require('passport')

const mongoose = require('mongoose')
const dbconfig = require('./config/db')

//routes
const users = require('./routes/users')

//db connection
mongoose.connect(dbconfig.database)
mongoose.connection.on('connected', () => {
    console.log("Connected to database " +dbconfig.database)
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error: " +err)
})


//initialize app
const app = express()
app.use(bodyParser.json())
const port = 3000;

//initial gets  
app.get('/', (req, res) => {
    res.send('magical things are about to happen')
})
// routes for user
app.use('/users', users)

// routes for post



// Start Server
app.listen(port, () => {
    console.log('Listening on port ' +port)
})