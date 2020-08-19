const express = require('express')
const router = express.Router()

const { healthCheck } = require('../controllers/health')
const { getProduct, getProducts } = require('../controllers/products')

router.get('/health', healthCheck)
router.get('/products/:id', getProduct)
router.get('/products', getProducts)

module.exports = router
