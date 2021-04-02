const express = require('express')

const ResumeCtrl = require('../controllers/resume-ctrl')

const router = express.Router()

router.post('/resume', ResumeCtrl.createResume)
router.get('/resume/:code', ResumeCtrl.getResumeByCode)

module.exports = router