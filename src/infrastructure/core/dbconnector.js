const mongoose = require('./mongoose')

const resolveMongoDBUri = () => {
  return process.env.MONGODB_URI
}

const resolveMongoDBOptions = () => {
  return {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}

const connect = () => {
  const mongoURI = resolveMongoDBUri()
  const options = resolveMongoDBOptions()
  mongoose.connect(mongoURI, options)
}

module.exports = {
  resolveMongoDBUri,
  resolveMongoDBOptions,
  connect
}
