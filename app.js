const express = require('express')

const bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    dbconfig = require('./config/db')

//routes
const users = require('./routes/users')

//db connection
mongoose.connect(dbconfig.database)
mongoose.connection.on('connected', () => {
    console.log("Connected to database " + dbconfig.database)
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error: " + err)
})


//initialize app
const port = 3000;
const app = express()
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())


//initial gets  
app.get('/', (req, res) => {
    res.send('magical things are about to happen')
})
// routes for user
app.use('/users', users)

// routes for post



// Start Server
app.listen(port, () => {
    console.log('Listening on port ' + port)
})