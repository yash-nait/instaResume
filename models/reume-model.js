const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Resume = new Schema(
    {
        name: { type: String, required: true },
        img_link :{ type: String, required: true},
        skill1: { type: String, required: true },
        skill2: { type: String, required: true },
        award1: { type: String, required: true },
        award2: { type: String, required: true },
        education1: { type: String, required: true },
        education2: { type: String, required: true },
        exp1: { type: String, required: false },
        exp2: { type: String, required: false },
        code: {type: String, required: true,  unique : true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('resumes', Resume)