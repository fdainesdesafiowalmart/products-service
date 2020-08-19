const app = require('./infrastructure/core/server')
const config = require('./infrastructure/core/config')

app.get('/health', (req, res) => {
  res.status(200).send()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(config.application.port, () => {
  console.log(`Example app listening at http://localhost:${config.application.port}`)
})

module.exports = server
