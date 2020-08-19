const { Product } = require('../orm/mongoose/product')

const findProductById = async (id) => {
  try {
    return await Product.findOne({ id: id })
  } catch (error) {
    return undefined
  }
}

module.exports = { findProductById }
