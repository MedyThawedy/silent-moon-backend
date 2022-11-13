
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
