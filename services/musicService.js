import { getDb } from "../util/db.js";

export const getAllMusic = async () => {
    // Get a playlist
    const db = await getDb();
    const findAllMusic = await db.collection('music').find().toArray()
    return findAllMusic;
}