import { getDb } from '../util/db.js'
import { getAllMusic, addOneSong, findSongById, pushUserFavoriteMusic, pushToMeditationPlaylist } from '../services/musicService.js';

export const getMusic = async (req, res) => {
    try {
        const findAllMusic = await getAllMusic()
        res.status(200).json(findAllMusic);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const addMusic = async (req, res) => {
    const song = req.body;
    try {

        const responseAddSong = await addOneSong(song)
        res.status(200).json({ message: "Music added!" });
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getOneSong = async (req, res) => {
    const songid = req.params.id;

    try {
        const findSong = await findSongById(songid)
        res.status(200).json(findSong);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const pushToUserMusicFavoriteList = async (req, res) => {
    const music_id = req.params.id
    //?????????
    const user_id = req.body.user_id
    try {
        const result = await pushUserFavoriteMusic(music_id, user_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const pushToMeditation = async (req, res) => {
    const music_id = req.body.music_id
    //?????????
    const meditation_id = req.body.meditation_id
    try {
        const result = await pushToMeditationPlaylist(music_id, meditation_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

