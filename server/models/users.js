const db = require('mongodb').Db
const getMongoClientInstance = require('../config/index')
const { hashPass, comparePass } = require('../utils/bcrypt')

const database = process.env.MONGO_DB_NAME
const userCollection = 'users'

export const getCollection = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(database)
    return db;
}

export const registerUser = async (user) => {
    const db = await getCollection()
    const newUser = {
        ...user,
        password: hashPass(user.password)
    }
    const result = db.collection(userCollection).insertOne(newUser)
    return result
}

export const loginUser = async (username, password) => {
    const db = await getCollection()
    const user = db.collection(userCollection).findOne({ username: username })

    if (!user) return 'InvalidCredentials'
    if (!comparePass(password, user.password)) return 'InvalidCredentials'

    return user
}