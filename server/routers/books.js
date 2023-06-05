const express = require('express')
const router = express.Router()
const Book = require('../schemas/books')
const circularJSON = require('circular-json')

router.get('/', async (req, res) => {
    try {
        await Book.find().then((all) => {
            const str = circularJSON.stringify(all)
            JSON.parse(str)
            res.send(str)
        })
    } catch(err){
        console.log(err)
    }
})

module.exports = router