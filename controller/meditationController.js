
import {
    getAllMeditations, findOneRandomMeditation,
    findMeditationProgram, findRecommendFourRandomMeditation, findMeditationDetails,
    pushUserFavoriteMeditation, findRelationMeditationMusic, findMeditationCategory,
    doFavorizeMeditation, addMeditationProgramm
} from '../services/meditationService.js';



export const getAllMeditation = async (req, res) => {
    try {
        const findAllMeditations = await getAllMeditations()
        res.status(200).json(findAllMeditations);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getOneRandomMeditation = async (req, res) => {
    try {
        const oneRandommeditation = await findOneRandomMeditation()
        res.status(200).json(oneRandommeditation);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const searchMeditationProgram = async (req, res) => {
    //  const searchStr = req.body.searchmeditationstring
    let searchObj = req.query
    let searchmeditationstring = searchObj.searchmeditationstring
    try {
        const meditationprogramm = await findMeditationProgram(searchmeditationstring)
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

// searchYogaCategory
export const searchMeditationCategory = async (req, res) => {
    //?????????
    let query = req.query;

    let strmeditationcategory = query.strmeditationcategory;

    try {
        const result = await findMeditationCategory(strmeditationcategory)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

//addFavorite
export const favorizeMeditation = async (req, res) => {
    const meditation_id = req.params.id
    //?????????

    try {
        const result = await doFavorizeMeditation(meditation_id)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

//addMeditationProgramm
export const saveMeditationprogramm = async (req, res) => {
    const meditationProgramm = req.body;
    try {
        const addmeditation = await addMeditationProgramm(meditationProgramm)
        res.status(200).json({ message: 'Meditation Programm saved! ' });
    } catch (err) {
        res.status(500).json({ error: err })
    }

}