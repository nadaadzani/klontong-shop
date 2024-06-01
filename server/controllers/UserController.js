const { registerUser, loginUser } = require('../models/users')

class UserController {
    static async register(req, res, next) {
        try {
            const { username, password } = req.body
            const user = await registerUser(username, password)

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

            if (user === 'InvalidCredentials') throw 'InvalidCredentials'

            res.status(200).json({
                message: `Successfully logged in, welcome ${user.username}`,
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController