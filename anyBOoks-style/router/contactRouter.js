const express = require('express')
const app = express();
const router = express.Router();
const contactCOntroller = require('../controller/contactController')
//router.get('/', homeController.getHome)
router.get('/contact', contactCOntroller.contactPage)
module.exports = router