const retrieveProducts = async ({ findProducts }, pattern) => {
  try {
    return await findProducts(pattern)
  } catch (error) {
    return []
  }
}

module.exports = { retrieveProducts }
