import { getDb } from '../util/db.js'
import { getAllMusic, addOneSong, findSongById } from '../services/musicService.js';

export const getMusic = async (req, res) => {
    const findAllMusic = await getAllMusic()
    res.status(200).json(findAllMusic);
}

export const addMusic = async (req, res) => {
    const song = req.body;
    const responseAddSong = await addOneSong(song)
    res.status(200).json(responseAddSong);
}

export const getOneSong = async (req, res) => {
    const songid = req.params.id;
    const findSong = await findSongById(songid)
    res.status(200).json(findSong);
}