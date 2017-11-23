const express = require('express')
const router = express.Router()

//post
router.post('new', (req, res, next) => {
    //TODO -- post new blogpost
})

//get
router.get('/posts', (req, res, next) => {
    //TODO - get all blog posts
})

router.get('/post.:postId', (req, res, next) => {
    //TODO - get post by id
})