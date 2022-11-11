import { getDb } from '../util/db.js'
import { getAllMusic } from '../services/musicService.js';

export const getMusic = async (req, res) => {
    const findAllMusic = await getAllMusic()
    res.status(200).json(findAllMusic);
}