const Resume = require('../models/reume-model')

createResume = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a resume',
        })
    }

    const resume = new Resume(body)

    if (!resume) {
        return res.status(400).json({ success: false, error: err })
    }

    resume
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                code: resume.code,
                message: 'Resume created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Resume not created!',
            })
        })
}

getResumeByCode = async (req, res) => {
    await Resume.findOne({ code: req.params.code }, (err, resume) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!resume) {
            return res
                .status(404)
                .json({ success: false, error: `Resume not found` })
        }
        return res.status(200).json({ success: true, data: resume })
    }).catch(err => console.log(err))
}

module.exports = {
    createResume,
    getResumeByCode
}