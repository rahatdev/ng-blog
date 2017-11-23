import { Date } from 'core-js/library/web/timers';

const mongoose = require('mongoose')

const BlogpostSchema = mongoose.Schema({
    author: { //username or _id 
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    public: {
        type: Boolean,
    }
})

const Blogpost = module.exports = mongoose.model('Blogpost', BlogpostSchema)

//create
const putBlogpost = module.exports.putBlogpost = (newBlogpost, callback) => {
    newBlogpost.save(callback)
}
//read
const getBlogposts = module.exports.getBlogPosts = (author, callback) => {
    let query = {}
    if(author) query.author = author

    Blogpost.find(query, callback)
}

const getBlogpost = module.exports.getBlogPost = (id, callback) => {
    if(!id) callback(new Error('id cannot be null'))
    Blogpost.findById(id, callback)
}
// search?


//update

//delete??
