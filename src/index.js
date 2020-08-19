const app = require('./infrastructure/core/server')
const mongoose = require('./infrastructure/core/dbconnector')
const config = require('./infrastructure/core/config')
const router = require('./infrastructure/routers')

app.use('/', router)

const server = app.listen(config.application.port, () => {
  mongoose.connect()
  console.log(`Example app listening at http://localhost:${config.application.port}`)
})

module.exports = server
