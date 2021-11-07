const express = require('express')
const app = express();
const router = express.Router();
const homeController = require('../controller/homeController')
//router.get('/', homeController.getHome)
router.get('/', homeController.dataController)
module.exports = router