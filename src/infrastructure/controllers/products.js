const { retrieveProduct } = require('../../application/use_cases/retrieveproduct')
const { retrieveProducts } = require('../../application/use_cases/retrieveproducts')
const productsRepository = require('../repositories/products')

const getProducts = async (req, res, next) => {
  const { query } = req

  const products = await retrieveProducts(productsRepository, query.pattern)

  const response = {
    total: products.length,
    products: products
  }
  res.status(200).json(response)
  return next()
}

const getProduct = async (req, res, next) => {
  const { params } = req

  const product = await retrieveProduct(productsRepository, params.id)

  if (product) {
    res.status(200).json(product)
    return next()
  }

  res.status(404).json({ message: 'Product does not exist' })
  return next(false)
}

module.exports = { getProducts, getProduct }
