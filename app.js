const express = require('express')

const bodyParser = require('body-parser')
const path = require('path')

const cors = require('cors')
const passport = require('passport')

const mongoose = require('mongoose')
const dbconfig = requrie('./config/db')

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
const port = 3000;

//initial gets  
// routes for user
// routes for post


// Start Server
app.listen(port, () => {
    console.log('Listening on port ' +port)
})