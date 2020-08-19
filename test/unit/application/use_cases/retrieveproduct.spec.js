const { retrieveProduct } = require('application/use_cases/retrieveproduct')

describe('Application:UseCases:RetrieveProduct', () => {
  it('should return repository response', async () => {
    const repositoryMock = {
      findProductById: jest.fn((id) => {
        return {
          id: id,
          foo: 'bar'
        }
      })
    }

    const product = await retrieveProduct(repositoryMock, 100)

    expect(product).toStrictEqual({ id: 100, foo: 'bar' })
  })

  it('should call repository with id', async () => {
    const repositoryMock = {
      findProductById: jest.fn((id) => {
        return {
          id: id,
          foo: 'bar'
        }
      })
    }

    const product = await retrieveProduct(repositoryMock, 100)

    expect(repositoryMock.findProductById).toHaveBeenCalledWith(100)
  })

  it('should return undefined when call to repository fails', async () => {
    const repositoryMock = {
      findProductById: jest.fn((id) => {
        throw new Error('error details')
      })
    }

    const product = await retrieveProduct(repositoryMock, 100)

    expect(product).toBe(undefined)
  })
})
