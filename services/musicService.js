import { ObjectId } from "mongodb";
import { getDb } from "../util/db.js";

export const getAllMusic = async () => {
    // Get a playlist
    const db = await getDb();
    const findAllMusic = await db.collection('music').find().toArray()
    return findAllMusic;
}

export const addOneSong = async (song) => {
    const db = await getDb();
    const result = await db.collection('music').insertOne(song)
    return result;
}

export const findSongById = async (songid) => {
    const db = await getDb();
    const result = await db.collection('music').findOne({ _id: new ObjectId(songid) })
    return result;
}

//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert yoga_id in the user collection
export const pushUserFavoriteMusic = async (musicid, userid) => {
    const db = await getDb()
    const result = await db.collection('user').updateOne({ _id: new ObjectId(userid) }, { $push: { music_id: ObjectId(musicid) } })
    return result
}


//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert yoga_id in the user collection
export const pushToMeditationPlaylist = async (musicid, meditationid) => {
    const db = await getDb()
    const result = await db.collection('meditation').updateOne({ _id: new ObjectId(meditationid) }, { $push: { music_id: ObjectId(musicid) } })
    return result
}





