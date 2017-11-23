import { Date } from 'core-js/library/web/timers';

const express = require('express')
const router = express.Router()

const Blogpost = require('../models/blogpost')

//post
router.post('/new', (req, res, next) => {
    //TODO -- check if author is valid, and token is valid
    let newBlogpost = new Blogpost({
        author: req.body.author,
        date: '',//new Date().getDate() //need to experiment
        content: req.body.content,
        public: req.body.public
    })

    Blogpost.putBlogpost(newBlogpost, (err, blogpost) => {
        if(err) res.send({success: false, msg: err.message})
        else res.send({success: true, msg:'Post created successfully'})
    })
})

//get
router.get('/posts', (req, res, next) => {
    //TODO - get all blog posts
    //TODO - if not loggedin, show only public posts
    //TODO - if loggedin, show all posts for username
    Blogpost.getBlogposts(null, (err, blogposts) => {
        if(err){
            res.send({success: false, msg: err.message })
        } 
        else {
            console.log(blogposts)
            res.send({
                success: true,
                msg: 'All public posts',
                blogposts: blogposts
            })
        }
    })

    

})

router.get('/post.:postId', (req, res, next) => {
    //TODO - get post by id
})