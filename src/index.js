const http = require('http')
const log = require('./log')
const helloWorld = require('./helloWorld')
const { PORT } = require('./config')

function sayHello (req, res) {
  res.write(helloWorld())
  res.end()
}

http.createServer(sayHello).listen(PORT)

log(`Running on port ${PORT}`)
