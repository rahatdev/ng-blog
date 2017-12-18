//import { Date } from 'core-js/library/web/timers';

const express = require('express')
const router = express.Router()
const passport = require('passport')

const Blogpost = require('../models/blogpost')

//get
router.get('/all', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    
    Blogpost.getAllBlogposts(null, (err, blogposts) => {
        if(err){
            res.send({success: false, msg: err.message })
        } 
        else {
           // console.log(blogposts)
            res.send({
                success: true,
                msg: 'All public posts',
                blogposts: blogposts
            })
        }
    })
})

router.get('/public', (req, res, next) => {
    Blogpost.getPublicBlogposts(null, (err, blogposts) => {
        if(err){
            res.send({success: false, msg: err.message })
        } 
        else {
           // console.log(blogposts)
            res.send({
                success: true,
                msg: 'All public posts',
                blogposts: blogposts
            })
        }
    })
})

router.get('/post.:postId', (req, res, next) => {
    //extract id

    //get post
    // if post public, return
    // if post private, authenticate
    //      if authenticated, return
    //      else unauthorized, send meaningful message
})

//can this be consolidated with above?
router.get('/private-post.:postId', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //extract id

    //get post
    // if post public, return
    // if post private, authenticate
    //      if authenticated, return
    //      else unauthorized, send meaningful message
})


// All post routes should be protected
//post
router.post('/new', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //TODO -- check if author is valid, and token is valid
    let newBlogpost = new Blogpost({
        author: req.body.author,
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        public: req.body.public
    })

    Blogpost.putBlogpost(newBlogpost, (err, blogpost) => {
        if(err) res.send({success: false, msg: err.message})
        else res.send({success: true, msg:'Post created successfully'})
    })
})

//todo update blogpost


module.exports = router