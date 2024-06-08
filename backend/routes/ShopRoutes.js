const express = require('express')
const router = express.Router()
const ShopController = require('../controllers/ShopController')

const controller = new ShopController()

router.get('/', controller.showAll)

module.exports = router;