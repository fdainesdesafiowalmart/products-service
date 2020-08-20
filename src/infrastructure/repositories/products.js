const { Product } = require('../orm/mongoose/product')

const findProductById = async (id) => {
  try {
    return await Product.findOne({ id: id })
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

    return await Product.find(query)
  } catch (error) {
    return []
  }
}

module.exports = {
  findProductById,
  findProducts
}
