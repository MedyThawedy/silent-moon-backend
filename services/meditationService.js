import { getDb } from "../util/db.js"
import { ObjectId } from "mongodb"

export const findOneRandomMeditation = async () => {
    // Get a playlist
    const db = await getDb();
    const oneRandomYoga = await db.collection('meditation').findOne()
    return oneRandomYoga;
}

export const findMeditationProgram = async (searchStr) => {
    // Get a playlist
    const db = await getDb();
    //const sqlLikeStatement = "/" + searchStr + "/"
    //{'title': {'$regex': searchStr}}
    const meditationprogramm = await db.collection('meditation').find({ 'title': { '$regex': searchStr } }).toArray()
    //const yogaprogramm = await db.collection('yoga').find({ title: sqlLikeStatement }).toArray()
    return meditationprogramm;
}


export const findRecommendFourRandomMeditation = async () => {
    // Get a playlist
    const db = await getDb();
    const fourRandomYoga = await db.collection('meditation').find().limit(4).toArray()
    return fourRandomYoga;
}

export const findMeditationDetails = async (id) => {
    const db = await getDb()
    const result = await db.collection('meditation').findOne({ _id: new ObjectId(id) })
    return result
}
