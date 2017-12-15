const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const dbconfig = require('../config/db')

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = (newUser, callback) => {
    // check if username already exists
    getUserByUsername(newUser.username, (err,user) => {
        if(err) handleError(err)
        if(!user){
            //console.log('username available, creating user')
            //encrypt password
            bcrypt.genSalt(10, (err,salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) handleError(err)
                    newUser.password = hash
                    newUser.save(callback)
                })
            })
        } else {
            //console.log(newUser.username + ' already exists, cannot create user')
            callback(new Error(newUser.username + ' already exists.'))
        }
    })   
}

const getUserByUsername = module.exports.getUserByUsername = (username, callback) => {
    let query = { username: username }
    User.findOne(query, callback)
}

const getUserByID = module.exports.getUserByID = function (id, callback) {
    User.findById(id, callback);
}


const comparePassword = module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if(err) handleError(err)
        callback(null, isMatch)
    })
}

function updateUser() {
    //TODO
}

// Should this exist?
function deleteUser(){
    //TODO
}

// What is the correct way to handle errors?  Global error handling?
const handleError = (err) => {
    console.log(err.message);
}
