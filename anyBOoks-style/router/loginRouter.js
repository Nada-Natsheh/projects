const express = require('express')
const router = express.Router()
const loginCOntroller = require('../controller/loginCOntroller')
router.get('/login', loginCOntroller.getLoginPage)
router.post('/login', loginCOntroller.login)
module.exports = router