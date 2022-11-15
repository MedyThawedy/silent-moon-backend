import express from 'express'
import { registerUser, loginUser, connectUserFavoriteYoga, connectUserFavoriteMeditation, connectUserFavoriteMusic } from '../controller/userController.js'

export const router = new express.Router()

// CRUDS 
// User Registration // Relation = Sign up
router.post('/api/registration', registerUser)

// User Login // Relation = Sign in 
router.post('/api/login', loginUser)

//Relation = User Profile First Block Favorite Yoga Sessions
router.get('/api/userfavoriteyoga/:id', connectUserFavoriteYoga)

//Relation = User Profile First Block Favorite Meditations
router.get('/api/userfavoritemeditation/:id', connectUserFavoriteMeditation)

//Relation = User Profile First Block Favorite Music
router.get('/api/userfavoritemusic/:id', connectUserFavoriteMusic)