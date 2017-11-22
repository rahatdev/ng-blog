const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
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

const User = mongoose.model('User', UserSchema)

function createUser(newUser, callback){
    //TODO
}

function getUserById(){
    //TODO
}

function getUserByUsername(){
    //TODO
}
function comparePassword(){
    //TODO
}

function updateUser(){
    //TODO
}


module.exports({
    User,
    createUser,
    getUserById,
    getUserByUsername,
    comparePassword,
    updateUser
})

