const { verifyToken } = require("../utils/token")

const authentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) throw 'NotLoggedIn'
        const token = authorization.split(' ')[1]

        const user = verifyToken(token)

        req.loginInfo = {
            id: user.id,
            username: user.username,
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication