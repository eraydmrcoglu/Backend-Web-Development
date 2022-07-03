const express = require('express')
const furnitureController = require('../controllers/furnitureController')

const router = express.Router()

router.route('/').post(furnitureController.createFurniture)


module.exports = router;