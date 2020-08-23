const router = require('./infrastructure/routers')
const app = require('./infrastructure/core/server')
const mongoose = require('./infrastructure/core/dbconnector')
const config = require('./infrastructure/core/config')
const swaggerRouter = require('./infrastructure/core/swagger')

app.use(config.application.prefixURL, router)
app.use('/api-doc', swaggerRouter)

const server = app.listen(config.application.port, () => {
  mongoose.connect()
  console.log(`Example app listening at http://localhost:${config.application.port}`)
})

module.exports = server
