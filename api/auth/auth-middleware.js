const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

// AUTHENTICATION
const restricted = (req, res, next) => {
  // pull token from request ???
  const token = req.headers.authorization
  if (!token) {
    return next({ status: 401, message: 'You shall not pass!' })
  }
  jwt.verify()
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
