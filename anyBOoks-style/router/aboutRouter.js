const express = require('express')
const router = express.Router();
const aboutController = require('../controller/aboutController')
//router.get('/', homeController.getHome)
router.get('/about', aboutController.aboutPage)
module.exports = router