const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

// AUTHENTICATION
const restricted = (req, res, next) => {
  // pull token from request
  
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
