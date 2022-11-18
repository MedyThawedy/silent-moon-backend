import { ObjectId } from "mongodb"
import { getDb } from '../util/db.js'


export const saveUser = async (user) => {
    const db = await getDb();

    const result = await db.collection('user').insertOne(user)
    return result;
}

// This function check for duplicates
export const findOneUserWithThisEmailAdress = async (email) => {
    const db = await getDb();

    const findEmail = await db.collection('user').findOne({
        $or: [{ email: email }]
    })
    return findEmail;
}

// This function will join user with yoga on user.yoga_id = yoga._id
export const findRelationUserFavoriteToYoga = async (userid) => {

    const db = await getDb();

    const displayRelationBetweenUserAndYoga = await db.collection('user').aggregate([
        { $match: { _id: new ObjectId(userid) } },
        {
            $lookup:
            {
                from: 'yoga',
                localField: 'yoga_id',
                foreignField: '_id',
                as: 'favoriteyoga' // You can use another string here instead of yoga_id
            }
        }
    ]).toArray()

    return displayRelationBetweenUserAndYoga;
}

// This function will join user with yoga on user.meditation_id = meditation._id
export const findRelationUserFavoriteToMeditation = async (userid) => {

    const db = await getDb();

    const displayRelationBetweenUserAndMeditation = await db.collection('user').aggregate([
        { $match: { _id: new ObjectId(userid) } },
        {
            $lookup:
            {
                from: 'meditation',
                localField: 'meditation_id',
                foreignField: '_id',
                as: 'favoritemeditation' // You can use another string here instead of yoga_id
            }
        }
    ]).toArray()

    return displayRelationBetweenUserAndMeditation;
}


// This function will join user with yoga on user.meditation_id = meditation._id
export const findRelationUserFavoriteToMusic = async (userid) => {

    const db = await getDb();

    const displayRelationBetweenUserAndMusic = await db.collection('user').aggregate([
        { $match: { _id: new ObjectId(userid) } },
        {
            $lookup:
            {
                from: 'music',
                localField: 'music_id',
                foreignField: '_id',
                as: 'favoritemusic' // You can use another string here instead of yoga_id
            }
        }
    ]).toArray()

    return displayRelationBetweenUserAndMusic;
}


// This function check for duplicates
export const findUserById = async (userid) => {
    const db = await getDb();

    const finduser = await db.collection('user').findOne({
        $or: [{ _id: new ObjectId(userid) }]
    })
    return finduser;
}



