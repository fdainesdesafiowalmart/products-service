const configuration = {
  application: {
    id: 'products-service',
    name: 'Products Service',
    prefixURL: '/products-service/v1',
    port: process.env.NODE_PORT || 8330,
    logLevel: process.env.LOG_LEVEL || 'debug'
  }
}

module.exports = configuration
