const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

function tokenBuilder(user) {
  return 'the awesome token'
}

module.exports = tokenBuilder
