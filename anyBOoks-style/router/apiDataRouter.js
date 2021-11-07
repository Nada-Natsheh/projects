const express = require('express')
const router = express.Router();
const apiCOntroller = require('../controller/apiBooksDataController')
//router.get('/', homeController.getHome)
router.get('/booksData', apiCOntroller.getData)
module.exports = router