const express = require('express')
const router = express.Router()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Products Service',
      description: 'xxxxxxx',
      contact: {
        name: 'Francisco Daines'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['**/routers/*.js']
}

const swaggerDocument = swaggerJsDoc(swaggerOptions)

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDocument))

module.exports = router
