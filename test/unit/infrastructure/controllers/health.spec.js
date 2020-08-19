const { Response } = require('jest-express/lib/response')

const { healthCheck } = require('../../../../src/infrastructure/controllers/health')

describe('Controllers:Health', () => {
  it('should test that true === true', async () => {
    const response = new Response()
    const nextMock = jest.fn();

    healthCheck({}, response, nextMock);

    expect(response.status).toBeCalledWith(200)
    expect(nextMock).toBeCalledWith()
  })
})
