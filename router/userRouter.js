import express from 'express'
import { registerUser, loginUser } from '../controller/userController.js'

export const router = new express.Router()

// CRUDS 
// User Registration // Relation = Sign up
router.post('/api/registration', registerUser)
// User Login // Relation = Sign in 
router.post('/api/login', loginUser)