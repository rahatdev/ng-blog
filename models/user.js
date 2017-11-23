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
    console.log('Attempting to create ' + newUser.username)
    
    usernameExists(newUser.username).then(exists => {
        console.log('username exists - ' + exists)
        if (exists === true) console.log(+newUser.username + ' already exists')
        else console.log(newUser.username + 'is available')
    })
    // newUser.save(callback);    
}

const usernameExists = (username, callback) => {
    console.log('searching for username: ' + username)
    getUserByUsername(username, (err, user) => {
        if (err) handleError(err)
        console.log(user)

        if(user !== undefined) return true
        else return false
    })
}

const getUserByUsername = (username, callback) => {
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

