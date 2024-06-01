const MongoClient = require('mongodb').MongoClient;

const connectionString = process.env.MONGO_URI
let client;

if (!connectionString) throw new Error('Connection string is required')

export const getMongoClientInstance = async () => {
    if (!client) {
        client = await MongoClient.connect(connectionString)
        await client.connect()
    }

    return client
}
