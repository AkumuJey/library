const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All authors
router.get('/', (req, res) => {
    res.render('authors/index')
})

router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// Create auther
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router