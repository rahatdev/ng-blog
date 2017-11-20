import { Date } from 'core-js/library/web/timers';

const mongoose = require('mongoose')

const BlogpostSchema = mongoose.Schema({
    author: {
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
//read
//update

