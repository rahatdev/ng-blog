const express = require('express')

const bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    dbconfig = require('./config/db')

//routes
const users = require('./routes/users'),
    blogposts = require('./routes/blogposts')

//db connection
mongoose.connect(dbconfig.database)
mongoose.connection.on('connected', () => {
    console.log("Connected to database " + dbconfig.database)
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error: " + err)
})


//initialize app
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport-config')(passport);

// routes 
app.use('/users', users);
app.use('/posts/', blogposts);
app.use(express.static(path.join(__dirname, 'public')));

//initial gets  
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'));
})
app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
    console.log('Listening on port ' + port);
})