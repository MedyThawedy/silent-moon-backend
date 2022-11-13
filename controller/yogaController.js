import { getDb } from '../util/db.js'
import { findOneRandomYoga, findYogaProgramm, findRecommendFourRandomYoga, findYogaDetails, pushUserFavoriteYoga } from '../services/yogaService.js';

export const getOneRandomYoga = async (req, res) => {
    try {
        const oneRandomYoga = await findOneRandomYoga()
        res.status(200).json(oneRandomYoga);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const searchYogaProgramm = async (req, res) => {
    const searchStr = req.body.searchyogastring
    try {
        const yogaprogramm = await findYogaProgramm(searchStr)
        res.status(200).json(yogaprogramm);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const searchRecommendedYogaProgram = async (req, res) => {
    const searchStr = req.body.searchyogastring
    try {
        const yogaprogramm = await findRecommendFourRandomYoga()
        res.status(200).json(yogaprogramm);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const getYogaDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await findYogaDetails(id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


// setFavoriteYoga
export const setFavoriteYoga = async (req, res) => {
    const yoga_id = req.params.id
    const user_id = req.body.user_id
    try {
        const result = await findYogaDetails(id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const pushToUserYogaFavoriteList = async (req, res) => {
    const yoga_id = req.params.id
    //?????????
    const user_id = req.body.user_id
    try {
        const result = await pushUserFavoriteYoga(yoga_id, user_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
