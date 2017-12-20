//import { Date } from 'core-js/library/web/timers';
const express = require('express')
const router = express.Router()
const passport = require('passport')

const Blogpost = require('../models/blogpost')

//get
router.get('/post.:postId', (req, res, next) => {
    //extract id
    let id = req.query.param1;

    //get post
    Blogpost.getBlogpostById(id, (err, blogpost) => {
        if(!err && blogpost.public === true) {
            res.send({
                success: true,
                msg: 'Blogpost successfully retreived',
                blogpost: blogpost
            });
        } else if(err) {
            res.send({ success: false, msg: err.message });
        } else {
            res.send({ success: false, msg: 'Blogpost could not be retreived.' });
        }
    });
})

//can this be consolidated with above?
router.get('/private-post/:postId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //extract id
    let id = req.query.param1;

    //get post
    Blogpost.getBlogpostById(id, (err, blogpost) => {
        if(!err) {
            res.send({
                success: true,
                msg: 'Blogpost successfully retreived',
                blogpost: blogpost
            })
        } else {
            res.send({ success: false, msg: err.message })
        }
    })
})

router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Blogpost.getAllBlogposts(null, (err, blogposts) => {
        if(err) {
            res.send({ success: false, msg: err.message })
        }
        else {
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
        if(err) {
            res.send({ success: false, msg: err.message })
        }
        else {
            res.send({
                success: true,
                msg: 'All public posts',
                blogposts: blogposts
            })
        }
    })
})

//post
router.post('/new', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let newBlogpost = new Blogpost({
        author: req.body.author,
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        public: req.body.public
    })

    Blogpost.putBlogpost(newBlogpost, (err, blogpost) => {
        if(err) res.send({ success: false, msg: err.message })
        else res.send({ success: true, msg: 'Post created successfully' })
    })
})

//update
router.post('/update/:postid', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //let id = req.query.param1; //unnecesary
    let newBlogpost = new Blogpost({
        _id: req.body.id,
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        public: req.body.public
    })

    Blogpost.updateBlogpost(newBlogpost, (err, blogpost) => {
        if(err) res.send({ success: false, msg: err.message });
        if(blogpost) res.send({ success: true, msg: 'Post updated successfully' });
        else res.send({ success: false, msg: 'Could not update post.' });
    })
})

module.exports = router