const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const resumeRouter = require('./routes/resume-router')

const app = express()
const apiPort = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req,res) => {
    res.send("OK")
})

app.use('/api',resumeRouter)

app.listen(apiPort, () => {
    console.log(`running on port ${apiPort}`)
})