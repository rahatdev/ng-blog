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
    getUserByUsername(newUser.username, (err,user) => {
        if(err) handleError(err)
        if(!user){
            console.log('username available, creating user')
            newUser.save(callback)
        } else {
            console.log(newUser.username + ' already exists, cannot create user')
            callback(new Error(newUser.username + ' already exists.'))
        }
    })

    // let exists = usernameExists(newUser.username, null)
    // if(!exists){
    //     console.log('available!')
    // } else {
    //     console.log('username already exists')
    // }
    // newUser.save(callback);    
}

const getUserByUsername = module.exports.getUserByUsername = (username, callback) => {
    let query = { username: username }
    User.findOne(query, callback)
}

const getUserByID = function (id, callback) {
    User.findById(id, callback);
}


function comparePassword() {
    //TODO
}

function updateUser() {
    //TODO
}

// What is the correct way to handle errors?  Global error handling?
const handleError = (err) => {
    console.log(err.message);
}


// module.exports = this.User
// module.exports = createUser
// module.exports = () => {
//     return {
//         User,
//         createUser,
//         getUserByID,
//         getUserByUsername,
//         comparePassword,
//         updateUser
//     }

// }

