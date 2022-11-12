import { getDb } from "../util/db.js"
import { ObjectId } from "mongodb"
// https://chartio.com/resources/tutorials/how-to-use-a-sql-like-statement-in-mongodb/

export const findOneRandomYoga = async () => {
    // Get a playlist
    const db = await getDb();
    const oneRandomYoga = await db.collection('yoga').findOne()
    return oneRandomYoga;
}


export const findYogaProgramm = async (searchStr) => {
    // Get a playlist
    const db = await getDb();
    //const sqlLikeStatement = "/" + searchStr + "/"
    //{'title': {'$regex': searchStr}}
    const yogaprogramm = await db.collection('yoga').find({ 'title': { '$regex': searchStr } }).toArray()
    //const yogaprogramm = await db.collection('yoga').find({ title: sqlLikeStatement }).toArray()
    return yogaprogramm;
}

export const findRecommendFourRandomYoga = async () => {
    // Get a playlist
    const db = await getDb();
    const fourRandomYoga = await db.collection('yoga').find().limit(4).toArray()
    return fourRandomYoga;
}

export const findYogaDetails = async (id) => {
    const db = await getDb()
    const result = await db.collection('yoga').findOne({ _id: new ObjectId(id) })
    return result
}