
import { findOneRandomMeditation, findMeditationProgram, findRecommendFourRandomMeditation, findMeditationDetails, pushUserFavoriteMeditation, findRelationMeditationMusic } from '../services/meditationService.js';

export const getOneRandomMeditation = async (req, res) => {
    try {
        const oneRandomYoga = await findOneRandomMeditation()
        res.status(200).json(oneRandomYoga);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const searchMeditationProgram = async (req, res) => {
    const searchStr = req.body.searchmeditationstring
    try {
        const meditationprogramm = await findMeditationProgram(searchStr)
        res.status(200).json(meditationprogramm);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const searchRecommendedMeditationProgram = async (req, res) => {
    try {
        const meditationprogramm = await findRecommendFourRandomMeditation()
        res.status(200).json(meditationprogramm);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getMeditationDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await findMeditationDetails(id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getOneMeditation = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await findMeditationDetails(id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const pushToUserMeditationFavoriteList = async (req, res) => {
    const meditation_id = req.params.id
    //?????????
    const user_id = req.body.user_id
    try {
        const result = await pushUserFavoriteMeditation(meditation_id, user_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

// getMeditationPlayList
export const getMeditationPlayList = async (req, res) => {
    //const userid = req.body.userid;
    const meditation_id = req.params.id;
    try {
        const result = await findRelationMeditationMusic(meditation_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}