const express = require('express')
const router = express.Router()
const LocationController = require('../controllers/LocationController')

const controller = new LocationController()

router.get('/', controller.showAll)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)


module.exports = router;