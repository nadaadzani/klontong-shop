const { signToken } = require('../utils/token')
const { registerUser, loginUser } = require('../models/users')

class UserController {
  static async register(req, res, next) {
    try {
      const { username, password } = req.body
      const user = await registerUser(username, password)

      // Unique user validation
      if (user === 'UserAlreadyExists') throw 'UserAlreadyExists'

      res.status(201).json({
        message: 'Successfully registered',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body
      const user = await loginUser(username, password)

      // Credential validation
      if (user === 'InvalidCredentials') throw 'InvalidCredentials'

      const payload = {
        id: user._id,
        username: user.username
      }

      // Creates a token based on payload (user info)
      const token = signToken(payload)

      res.status(200).json({
        message: `Successfully logged in, welcome ${user.username}`,
        token
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController