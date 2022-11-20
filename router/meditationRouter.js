import express from 'express'
import {
    getOneRandomMeditation, searchMeditationProgram,
    searchRecommendedMeditationProgram, getMeditationDetails,
    pushToUserMeditationFavoriteList, getMeditationPlayList, searchMeditationCategory,
    getAllMeditation, favorizeMeditation, saveMeditationprogramm
} from '../controller/meditationController.js'


export const router = new express.Router()


//
// Relation to Music
router.get('/api/getallmeditation', getAllMeditation)
// Get one random meditation programm for the home component // Relation = Home component (On the top right)
router.get('/api/getrandommeditation', getOneRandomMeditation)
// Search Meditation Programm // Relation = Home, Meditate and Maybe Profile component (Search field)
router.get('/api/findmeditation', searchMeditationProgram)
// Find 4 Recommendation Meditation Programm // Relation = Meditate above the navigation
router.get('/api/recommendedmeditation', searchRecommendedMeditationProgram)
// Relation = Meditation Details 
router.get('/api/getmeditation/:id', getMeditationDetails)
//pushToUserMeditationFavoriteList
router.put('/api/addmeditationfavorite/:id', pushToUserMeditationFavoriteList)

// Relation = Meditation Details 
router.get('/api/getmeditation/:id', getMeditationDetails)

//Relation = Meditation Music Play List
router.get('/api/meditationmusic/:id', getMeditationPlayList)

// Find Meditation Programm // Relation = Second Navigation Bar
router.get('/api/findmeditationcategory', searchMeditationCategory)


// Set Favorite directly in the collection
router.put('/api/addfavorite/:id', favorizeMeditation)

//
// Add Programm
router.put('/api/addmeditation', saveMeditationprogramm)