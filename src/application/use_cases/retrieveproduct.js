const retrieveProduct = async ({ findProductById }, id) => {
  try {
    return await findProductById(id)
  } catch (error) {
    return undefined
  }
}

module.exports = { retrieveProduct }
