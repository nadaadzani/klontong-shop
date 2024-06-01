const jsonwebtoken = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'secret';

const signToken = (payload) => jsonwebtoken.sign(payload, secretKey);
const verifyToken = (token) => jsonwebtoken.verify(token, secretKey);

module.exports = {
    signToken,
    verifyToken
};