const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../../config').JWT_SECRET

function tokenBuilder(user) {
  return 'the awesome token'
}

module.exports = tokenBuilder
