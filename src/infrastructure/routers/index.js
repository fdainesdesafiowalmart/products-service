const express = require('express');
const router = express.Router();

const { healthCheck } = require('../controllers/health')
const { productsController } = require('../controllers/products')

router.get('/health', healthCheck)
router.get('/products', productsController)

module.exports = router;
