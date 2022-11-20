import { getDb } from "../util/db.js"
import { ObjectId } from "mongodb"


// getAllMeditations
export const getAllMeditations = async () => {
    // Get a playlist
    const db = await getDb();
    const findAllMeditation = await db.collection('meditation').find().toArray()
    return findAllMeditation;
}


export const findOneRandomMeditation = async () => {
    // Get a playlist
    const db = await getDb();
    const oneRandommeditation = await db.collection('meditation').findOne()
    return oneRandommeditation;
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
    //const fourRandommeditation = await db.collection('meditation').find().limit(4).toArray()
    const fourRandommeditation = await db.collection('meditation').aggregate([{ $sample: { size: 4 } }]).toArray()
    return fourRandommeditation;
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
    const result = await db.collection('user').updateOne({ _id: new ObjectId(userid) }, { $push: { meditation_id: ObjectId(meditationid) } })
    return result
}

// This function will join meditation with music on meditation.music_id = music._id
export const findRelationMeditationMusic = async (meditationid) => {

    const db = await getDb();

    const displayRelationMeditationMusic = await db.collection('meditation').aggregate([
        { $match: { _id: new ObjectId(meditationid) } },
        {
            $lookup:
            {
                from: 'music',
                localField: 'music_id',
                foreignField: '_id',
                as: 'meditationplaylist' // You can use another string here instead of music_id
            }
        }
    ]).toArray()

    return displayRelationMeditationMusic;
}


// 
export const findMeditationCategory = async (searchStr) => {
    // Get a playlist
    const db = await getDb();
    //const sqlLikeStatement = "/" + searchStr + "/"
    //{'title': {'$regex': searchStr}}
    const meditationprogramm = await db.collection('meditation').find({ 'category': { '$regex': searchStr } }).toArray()
    //const meditationprogramm = await db.collection('meditation').find({ title: sqlLikeStatement }).toArray()
    return meditationprogramm;
}


export const doFavorizeMeditation = async (meditationid) => {
    const db = await getDb()
    const result = await db.collection('meditation').updateOne({ _id: new ObjectId(meditationid) }, { $set: { category: 'Favorites' } })
    return result
}


export const addMeditationProgramm = async (meditationprogramm) => {
    const db = await getDb();
    const result = await db.collection('meditation').insertOne(meditationprogramm)
    return result;
}


