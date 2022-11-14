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
    //const meditationprogramm = await db.collection('meditation').find({ title: sqlLikeStatement }).toArray()
    const meditationprogramm = await db.collection('meditation').find({ 'title': { '$regex': searchStr } }).toArray()
    return meditationprogramm;
}


export const findRecommendFourRandomMeditation = async () => {
    // Get a playlist
    const db = await getDb();
    //const fourRandomYoga = await db.collection('meditation').find().limit(4).toArray()
    const fourRandomYoga = await db.collection('meditation').aggregate([{ $sample: { size: 4 } }]).toArray()
    return fourRandomYoga;
}

export const findMeditationDetails = async (id) => {
    const db = await getDb()
    const result = await db.collection('meditation').findOne({ _id: new ObjectId(id) })
    return result
}

//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert meditation_id in the user collection
export const pushUserFavoriteMeditation = async (meditationid, userid) => {
    const db = await getDb()
    const result = await db.collection('user').updateOne({ _id: new ObjectId(userid) }, { $push: { meditation_id: [new ObjectId(meditationid)] } })
    return result
}

