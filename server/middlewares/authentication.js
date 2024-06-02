const { verifyToken } = require("../utils/token")

const authentication = async (req, res, next) => {
    try {
        if (!req.headers.cookie) throw 'NotLoggedIn'
        const token = req.headers.cookie.split('=')[2]

        // Postman Authorization
        // if (!req.headers.authorization) throw 'NotLoggedIn'
        // const token = req.headers.authorization.split(' ')[1]


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