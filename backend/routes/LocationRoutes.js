const express = require('express')
const router = express.Router()
const LocationController = require('../controllers/LocationController')

const controller = new LocationController()

router.get('/', controller.showAll)


module.exports = router;