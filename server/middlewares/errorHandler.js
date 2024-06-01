const errorHandler = (err, req, res, next) => {
    let status = 500
    let message = 'Internal Server Error'

    if (err === 'UserAlreadyExists') {
        status = 400
        message = 'Username already exists'
    }
    if (err === 'InvalidCredentials') {
        status = 400
        message = 'Invalid username or password'
    }
    res.status(status).json({ message })
}

module.exports = errorHandler