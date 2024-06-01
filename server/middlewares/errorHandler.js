const errorHandler = (err, req, res, next) => {
  let status = 500
  let message = 'Internal Server Error'

  switch (err) {
    case 'UserAlreadyExists':
      status = 400
      message = 'Username already exists'
      break
    case 'InvalidCredentials':
      status = 401
      message = 'Invalid username or password'
      break
    case 'NotLoggedIn':
      status = 401
      message = 'You need to login first'
      break
  }

  console.log(err)
  res.status(status).json({ message })
}

module.exports = errorHandler