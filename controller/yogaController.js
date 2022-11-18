import { getDb } from '../util/db.js'
import myquerystring from 'querystring'
import myurl from 'url'
import { getAllYogas, findOneRandomYoga, findYogaProgramm, findRecommendFourRandomYoga, findYogaDetails, pushUserFavoriteYoga, findYogaCategory, favorizeYoga } from '../services/yogaService.js';

export const getAllYoga = async (req, res) => {
    try {
        const findAllYogas = await getAllYogas()
        res.status(200).json(findAllYogas);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getOneRandomYoga = async (req, res) => {
    try {
        const oneRandomYoga = await findOneRandomYoga()
        res.status(200).json(oneRandomYoga);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const searchYogaProgramm = async (req, res) => {
    let searchyogastring = req.query
    // Integrate stryoga in Client Page 
    searchyogastring = searchyogastring.stryoga

    try {
        const yogaprogramm = await findYogaProgramm(searchyogastring)
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

// ????
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

// searchYogaCategory
export const searchYogaCategory = async (req, res) => {
    //?????????
    let query = req.query;

    let stryogacategory = query.stryogacategory;

    try {
        const result = await findYogaCategory(stryogacategory)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const setFavorite = async (req, res) => {
    const yoga_id = req.params.id
    //?????????

    try {
        const result = await favorizeYoga(yoga_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

