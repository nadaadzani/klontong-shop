const getMongoClientInstance = require('../config/index')
const { getCollection } = require('./users')

const database = process.env.MONGO_DB_NAME
const productCollection = 'products'

const getAllProducts = async (offset) => {
    const db = await getCollection()

    // This "offset" acts as the pagination/page number
    // offset = 0

    const products = await db.collection(productCollection).find().limit(10).skip(offset).toArray()
    return products
}

const getProduct = async (id) => {
    const db = await getCollection()

    const product = await db.collection(productCollection).findOne({ id: id })
    return product
}

const addProduct = async (payload) => {
    const db = await getCollection()
    const newProduct = {
        ...payload
    }

    const result = await db.collection(productCollection).insertOne(newProduct)
    return result
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct
}