import express from 'express'
import { getMusic, addMusic, getOneSong, pushToUserMusicFavoriteList, pushToMeditation } from '../controller/musicController.js'

export const router = new express.Router()

// Relation to Music
router.get('/api/getallmusic', getMusic)

// Add new song
// Relation to Music
router.post('/api/addmusic', addMusic)

// Relation Meditation Player
router.get('/api/getonesong/:id', getOneSong)

// Relation = Profile pushToUserYogaFavoriteList
router.put('/api/addmusicfavorite/:id', pushToUserMusicFavoriteList)

// Relation = Meditation = Music Playlist
router.put('/api/addmusictomeditation', pushToMeditation)