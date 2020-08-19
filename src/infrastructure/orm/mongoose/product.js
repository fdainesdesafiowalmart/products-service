const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    brand: {
      type: String,
      unique: false,
      required: true
    },
    description: {
      type: String,
      unique: false,
      required: false
    },
    image: {
      type: String,
      unique: false,
      required: false
    },
    price: {
      type: Number,
      unique: false,
      required: true
    }
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = { Product }
