import express from 'express'
import { getMusic } from '../controller/musicController.js'

export const router = new express.Router()

// Relation to Music
router.get('/api/getallmusic', getMusic)