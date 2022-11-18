import { getAllYoga, getOneRandomYoga, searchYogaProgramm, searchRecommendedYogaProgram, getYogaDetails, setFavoriteYoga, pushToUserYogaFavoriteList, searchYogaCategory, setFavorite } from '../controller/yogaController.js'
import express from 'express'

export const router = new express.Router()

// Get all yoga programms
router.get('/api/getallyoga', getAllYoga)

// Get one random yoga programm for the home component // Relation = Home component (On the top left)  
router.get('/api/getrandomyoga', getOneRandomYoga)
// Search Yoga Programm by title // Relation = Home, Yoga and Maybe Profile component (Search field)
router.get('/api/findyoga', searchYogaProgramm)
// Find 4 Recommendation Yoga Programm // Relation = Yoga above the navigation
router.get('/api/recommendedyoga', searchRecommendedYogaProgram)
// Relation = Yoga Details
router.get('/api/getyoga/:id', getYogaDetails)
// Relation = the favorite button of the Yoga Details
router.put('/api/setfavoriteyoga/:id', setFavoriteYoga)
// Relation = Profile pushToUserYogaFavoriteList
router.put('/api/addyogafavorite/:id', pushToUserYogaFavoriteList)

// Find Yoga Programm // Relation = Second Navigation Bar
router.get('/api/findyogacategory', searchYogaCategory)

// Set Favorite directly in the collection
router.put('/api/setfavorite/:id', setFavorite)
