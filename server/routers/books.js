const express = require('express')
const router = express.Router()
const Book = require('../schemas/books')

router.get('/', async (req, res) => {
    try {
        await Book.find().then((all) => {
            const str = JSON.stringify(all)
            res.send(str)
        })
    } catch(err){
        console.log(err)
    }
})

module.exports = router