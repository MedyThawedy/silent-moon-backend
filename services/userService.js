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
