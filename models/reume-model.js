const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Resume = new Schema(
    {
        name: { type: String, required: true },
        img_link :{ type: String, required: false},
        skill1: { type: String, required: false },
        skill2: { type: String, required: false },
        award1: { type: String, required: false },
        award2: { type: String, required: false },
        education1: { type: String, required: false },
        education2: { type: String, required: false },
        exp1: { type: String, required: false },
        exp2: { type: String, required: false },
        code: {type: String, required: true,  unique : true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('resumes', Resume)