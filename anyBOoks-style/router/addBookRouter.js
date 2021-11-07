const express = require('express');
const router = express.Router()
const addBookController = require('../controller/addBookController')
router.get('/addbooks',addBookController.getPage)
router.post('/addbooks',addBookController.upload.single('image'))
router.post('/addbooks',addBookController.addBook)

module.exports = router
