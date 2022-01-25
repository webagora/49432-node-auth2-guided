const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../')

function tokenBuilder(user) {
  return 'the awesome token'
}

module.exports = tokenBuilder
