const express = require('express')
const router = express.Router()
const collegeGalleryCOntroller = require('../controller/collegeGalleryController')
router.get('/college/:id', collegeGalleryCOntroller.getThisGallegry)
module.exports = router