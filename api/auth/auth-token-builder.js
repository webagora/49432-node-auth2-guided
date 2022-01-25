const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
  const 
}

module.exports = tokenBuilder
