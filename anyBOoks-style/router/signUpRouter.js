const express = require('express')
const router = express.Router()
const signupController = require('../controller/signupController')
router.get('/signup',signupController.signUpPage)
router.post('/signup',signupController.signUpData)

module.exports = router