const express = require('express')
const router = express.Router()
const ShopController = require('../controllers/ShopController')

const controller = new ShopController()

router.get('/', controller.showAll)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)


module.exports = router;