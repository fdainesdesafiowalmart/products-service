jest.mock('infrastructure/core/mongoose', () => {
  return {
    connect: jest.fn(() => true)
  }
})
const mongoose = require('infrastructure/core/mongoose')

const { resolveMongoDBUri, resolveMongoDBOptions, connect } = require('infrastructure/core/dbconnector')

describe('Core:Mongoose', () => {
  it('should retrieve Mongo DB URI', () => {
    process.env['MONGODB_URI'] = 'foobar'
    const uri = resolveMongoDBUri()

    expect(uri).toBe('foobar')
  })

  it('should retrieve Mongo DB options', () => {
    process.env['MONGODB_USER'] = 'foo'
    process.env['MONGODB_PASSWORD'] = 'bar'

    const expectedOptions = {
      user: 'foo',
      pass: 'bar',
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    const options = resolveMongoDBOptions()

    expect(options).toStrictEqual(expectedOptions)
  })

  it('should connect to Mongo DB with expected URI and options', () => {
    process.env['MONGODB_URI'] = 'foobar'
    process.env['MONGODB_USER'] = 'foo'
    process.env['MONGODB_PASSWORD'] = 'bar'

    const expectedUri = 'foobar'
    const expectedOptions = {
      user: 'foo',
      pass: 'bar',
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    connect()

    expect(mongoose.connect).toHaveBeenCalledWith(expectedUri, expectedOptions)
  })
})
