const { retrieveProduct } = require('../../application/use_cases/retrieveproduct')
const productsRepository = require('../repositories/products')

const getProducts = (req, res, next) => {
  res.status(200).send()
  return next()
}

const getProduct = async (req, res, next) => {
  const { params } = req

  const product = await retrieveProduct(productsRepository, params.id)

  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ message: 'Product does not exist' })
  }
  return next()
}

module.exports = { getProducts, getProduct }
