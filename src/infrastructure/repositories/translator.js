const translateProduct = (product) => {
  return {
    id: product.id,
    brand: product.brand,
    description: product.description,
    image: product.image,
    price: product.price
  }
}

const toSortPattern = (orderby) => {
  if(orderby === 'brand') return { brand: 1 }
  if(orderby === 'description') return { description: 1 }
  if(orderby === 'price') return { price: 1 }

  return { id: 1 }  
}

module.exports = {
  translateProduct,
  toSortPattern
}
