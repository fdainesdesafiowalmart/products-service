const { isValidApiKey } = require('../core/apikey')

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-walmart-product-service-key'];

    if(!isValidApiKey(apiKey)) {
        res.status(401).end()
        return
    }
    return next()
}
  
module.exports = { checkApiKey }
  