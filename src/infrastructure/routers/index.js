const express = require('express')
const router = express.Router()

const { checkApiKey } = require('../middlewares/checkapikey')
const { healthCheck } = require('../controllers/health')
const { getProduct, getProducts } = require('../controllers/products')

/**
* @swagger
* /health:
*   get:
*     description: Use to check the service status
*     responses:
*       '200':
*         description: A successful response, the service is up and running
*       'other':
*         description: A failed response, the service is down
*/
router.get('/health', healthCheck)

/**
* @swagger
* /products/:id:
*   get:
*     description: Returns the product with the provided ID
*     responses:
*       '200':
*         description: A successful response, the service returns the product
*         schema:
*           type: object
*           properties:
*             id:
*               type: integer
*               description: The product id
*             brand:
*               type: string
*               description: The product brand
*             description:
*               type: string
*               description: The product description
*             image:
*               type: string
*               description: The product image URL
*             price:
*               type: integer
*               description: The product price
*       '404':
*         description: A failed response, there are no product with the provided ID
*/
router.get('/products/:id', checkApiKey, getProduct)

/**
* @swagger
* /products:
*   get:
*     description: Returns the list of products that satifies the search condition
*     responses:
*       '200':
*         description: The service returns the list of products that satisfies the search condition
*         schema:
*           type: object
*           properties:
*             total:
*               type: integer
*               description: The number of products that satisfies the search condition
*             products:
*               type: array
*               description: The list of products that satisfies the search condition
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                     description: The product id
*                   brand:
*                     type: string
*                     description: The product brand
*                   description:
*                     type: string
*                     description: The product description
*                   image:
*                     type: string
*                     description: The product image URL
*                   price:
*                     type: integer
*                     description: The product price
*/
router.get('/products', checkApiKey, getProducts)

module.exports = router
