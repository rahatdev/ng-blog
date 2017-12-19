//import { Date } from 'core-js/library/web/timers';

const express = require('express')
const router = express.Router()
const passport = require('passport')

const Blogpost = require('../models/blogpost')

//get
router.get('/post.:postId', (req, res, next) => {
    //extract id
    console.log('post is being accessed...')
    //get post
    // if post public, return
    // if post private, authenticate
    //      if authenticated, return
    //      else unauthorized, send meaningful message
})

//can this be consolidated with above?
router.get('/private-post/:postId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //extract id
    console.log('entering private post...');
    let id = req.query.param1;

    //get post
    Blogpost.getBlogpostById(id, (err, blogpost) => {
        if (!err) {
            res.send({
                success: true, 
                msg: 'Blogpost successfully retreived', 
                blogpost: blogpost
            })
        } else {
            res.send({ success: false, msg: err.message })
        }
    })
    // if post public, return
    // if post private, authenticate
    //      if authenticated, return
    //      else unauthorized, send meaningful message
})

router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Blogpost.getAllBlogposts(null, (err, blogposts) => {
        if (err) {
            res.send({ success: false, msg: err.message })
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
        if (err) {
            res.send({ success: false, msg: err.message })
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



// All post routes should be protected
//post
router.post('/new', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO -- check if author is valid, and token is valid
    let newBlogpost = new Blogpost({
        author: req.body.author,
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        public: req.body.public
    })

    Blogpost.putBlogpost(newBlogpost, (err, blogpost) => {
        if (err) res.send({ success: false, msg: err.message })
        else res.send({ success: true, msg: 'Post created successfully' })
    })
})

//todo update blogpost
router.post('/update/:postid', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO -- check if author is valid, and token is valid
    console.log('updating post... ');
    //let id = req.query.param1; //unnecesary

    let newBlogpost = new Blogpost({
        _id: req.body.id,
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        public: req.body.public
    })

    console.log(newBlogpost);
    Blogpost.updateBlogpost(newBlogpost, (err, blogpost) => {
        if (err) res.send({ success: false, msg: err.message })
        else res.send({ success: true, msg: 'Post updated successfully' })
    })
})


module.exports = router