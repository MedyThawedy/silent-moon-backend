import { getDb } from "./db.js"

export const checkCoins = async (price) => {

    const db = await getDb()
    const data = await db.collection('data').findOne()
    console.log('die coins', data);
    return data.coins >= price
}

export const decreaseCoins = async (price) => {
    console.log('in der helper')
    const db = await getDb()
    const data = await db.collection('data').updateOne({}, { '$inc': { 'coins': -price } })
    return data
}