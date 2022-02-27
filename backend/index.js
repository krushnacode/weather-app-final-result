const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')

env.config()


mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log('sever is running'))

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
