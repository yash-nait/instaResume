const mongoose = require('mongoose')

mongoose
    .connect(`mongodb+srv://dbyash:${process.env.passdb}@porjectdb.gs8nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db