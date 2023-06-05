const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    username: String,
    text: {
        type: String,
        maxLength: 400
    }, 
    rating: {
        type: Number,
        min: 0,
        max: 10
    }
})

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    author: String,
    ratings: ratingSchema,
    pages: Number
})

module.exports = mongoose.model("books", bookSchema)