const retrieveProducts = async ({ findProducts }, pattern, orderby) => {
  try {
    return await findProducts(pattern, orderby)
  } catch (error) {
    return []
  }
}

module.exports = { retrieveProducts }
