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