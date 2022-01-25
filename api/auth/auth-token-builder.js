const jwt = require('jsonwebtoken')
const JWT_SECRET = 'foobar'

function tokenBuilder(user) {
  return 'the awesome token'
}

module.exports = tokenBuilder
