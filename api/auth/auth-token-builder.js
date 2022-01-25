const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

function tokenBuilder(user) {
  console.log(JWT_SECRET)
  return 'the awesome token'
}

module.exports = tokenBuilder
