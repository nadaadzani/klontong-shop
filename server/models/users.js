// const db = require('mongodb').Db
const getMongoClientInstance = require('../config/index')
const { hashPass, comparePass } = require('../utils/bcrypt')

const database = process.env.MONGO_DB_NAME
const userCollection = 'users'

const getCollection = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(database)
    return db;
}

const registerUser = async (username, password) => {
    const db = await getCollection()
    const newUser = {
        username,
        password: hashPass(password)
    }

    // Check if user already exists
    const sameUser = await db.collection(userCollection).findOne({ username })
    if (sameUser) return 'UserAlreadyExists'

    const result = db.collection(userCollection).insertOne(newUser)
    return result
}

const loginUser = async (username, password) => {
    const db = await getCollection()
    const user = await db.collection(userCollection).findOne({ username: username })

    // Check if user is not found and password is not correct
    if (!user) return 'InvalidCredentials'
    if (!comparePass(password, user.password)) return 'InvalidCredentials'

    return user
}

module.exports = {
    getCollection,
    registerUser,
    loginUser
}