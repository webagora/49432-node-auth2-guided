const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

// AUTHENTICATION
const restricted = (req, res, next) => {
  // pull token from request ???
  const token = req.headers.authorization
  if (!token) {
    next({ status: 401, message: 'You shall not pass!' })
  } else {
    
  }
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
