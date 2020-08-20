const { Product } = require('../orm/mongoose/product')
const { translateProduct } = require('./translator')

const findProductById = async (id) => {
  try {
    const product = await Product.findOne({ id: id })
    const translatedProduct = translateProduct(product)

    return translatedProduct
  } catch (error) {
    return undefined
  }
}

const findProducts = async (pattern) => {
  try {
    const query = {
      $or: [
        {
          brand: {
            $regex: `${pattern}`
          }
        },
        {
          description: {
            $regex: `${pattern}`
          }
        }
      ]
    }

    const products = await Product.find(query)

    return products.map(product => translateProduct(product))
  } catch (error) {
    return []
  }
}

module.exports = {
  findProductById,
  findProducts
}
