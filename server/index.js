const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const compression = require('compression')
require("dotenv").config()

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(cors({origin: true, credentials: true, exposedHeaders: "*" }))
app.use(express.json())
app.use(compression())

const port = process.env.PORT
app.listen(port, () => {
    console.log("server is working on port " + port)
})

//routers
const booksRouter = require('./routers/books')
app.use('/books', booksRouter)