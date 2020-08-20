const { retrieveProducts } = require('application/use_cases/retrieveproducts')

describe('Application:UseCases:RetrieveProducts', () => {
  it('should return repository response', async () => {
    const repositoryMock = {
      findProducts: jest.fn((id) => {
        return [{
          id: id,
          foo: 'bar'
        }]
      })
    }

    const products = await retrieveProducts(repositoryMock, 100)

    expect(products).toStrictEqual([{ id: 100, foo: 'bar' }])
  })

  it('should call repository with pattern', async () => {
    const repositoryMock = {
      findProducts: jest.fn((id) => {
        return {
          id: id,
          foo: 'bar'
        }
      })
    }

    const product = await retrieveProducts(repositoryMock, 100)

    expect(repositoryMock.findProducts).toHaveBeenCalledWith(100)
  })

  it('should return empty array when call to repository fails', async () => {
    const repositoryMock = {
      findProducts: jest.fn((id) => {
        throw new Error('error details')
      })
    }

    const products = await retrieveProducts(repositoryMock, 100)

    expect(products).toStrictEqual([])
  })

})
