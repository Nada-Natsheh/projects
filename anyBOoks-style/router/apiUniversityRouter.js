const express = require('express')
const app = express();
const router = express.Router();
const apiUniversityCOntroller = require('../controller/universityAPIContreoller')
router.get('/universityData', apiUniversityCOntroller.getUniversityData)
module.exports = router