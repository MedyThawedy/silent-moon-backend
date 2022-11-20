import { getDb } from "../util/db.js"
import { ObjectId } from "mongodb"
// https://chartio.com/resources/tutorials/how-to-use-a-sql-like-statement-in-mongodb/

// getAllYoga
export const getAllYogas = async () => {
    // Get a playlist
    const db = await getDb();
    const findAllYogas = await db.collection('yoga').find().toArray()
    return findAllYogas;
}

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
    // const fourRandomYoga = await db.collection('yoga').find().limit(4).toArray()
    const fourRandomYoga = await db.collection('yoga').aggregate([{ $sample: { size: 4 } }]).toArray()

    return fourRandomYoga;
}

export const findYogaDetails = async (id) => {
    const db = await getDb()
    const result = await db.collection('yoga').findOne({ _id: new ObjectId(id) })
    return result
}

//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert yoga_id in the user collection
export const pushUserFavoriteYoga = async (yogaid, userid) => {
    const db = await getDb()
    const result = await db.collection('user').updateOne({ _id: new ObjectId(userid) }, { $push: { yoga_id: ObjectId(yogaid) } })
    return result
}


export const findYogaCategory = async (searchStr) => {
    // Get a playlist
    const db = await getDb();
    //const sqlLikeStatement = "/" + searchStr + "/"
    //{'title': {'$regex': searchStr}}
    const yogaprogramm = await db.collection('yoga').find({ 'category': { '$regex': searchStr } }).toArray()
    //const yogaprogramm = await db.collection('yoga').find({ title: sqlLikeStatement }).toArray()
    return yogaprogramm;
}



//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert yoga_id in the user collection
export const favorizeYoga = async (yogaid) => {
    const db = await getDb()
    const result = await db.collection('yoga').updateOne({ _id: new ObjectId(yogaid) }, { $set: { category: 'Favorites' } })
    return result
}

export const addYogaProgramm = async (yogaprogramm) => {
    const db = await getDb();
    const result = await db.collection('yoga').insertOne(yogaprogramm)
    return result;
}

