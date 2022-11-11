import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const DB = 'silent-moon-db'

const client = new MongoClient(URI)
let db

export const getDb = async () => {
    if (db) return db
    await client.connect()
    db = client.db(DB)
    return db
} 

