const translateProduct = (product) => {
  return {
    id: product.id,
    brand: product.brand,
    description: product.description,
    image: product.image,
    price: product.price
  }
}

module.exports = { translateProduct }
