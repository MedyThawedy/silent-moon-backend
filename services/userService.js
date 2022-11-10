
import { getDb } from '../util/db.js';
import { ObjectId } from "mongodb";

export const saveUser = async (user) => {
    const db = await getDb();
    const result = await db.collection('user').insertOne(user);
    return result;
}
