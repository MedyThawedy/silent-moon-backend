import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { registerUser, loginUser } from './controller/userController.js'
import { getMusic } from './controller/musicController.js'
import { getOneRandomYoga, searchYogaProgramm, searchRecommendedYogaProgram, getYogaDetails } from './controller/yogaController.js'
import { getOneRandomMeditation, searchMeditationProgram, searchRecommendedMeditationProgram, getMeditationDetails } from './controller/meditationController.js'



const PORT = process.env.PORT
const app = express()

//middleware
//app.use(cors({origin: "http://localhost:3000"}));
app.use(morgan('dev'))
app.use(cors())
//app.use(express.json({ limit: '10mb' }))
app.use(express.json())


//CRUDS 
//User Registration
app.post('/api/registration', registerUser)
//User Login
app.post('/api/login', loginUser)
//Testing the api
app.get('/api/getallmusic', getMusic)

// Get one random yoga programm for the home component
app.get('/api/getrandomyoga', getOneRandomYoga)
// Search Yoga Programm by title
app.get('/api/findyoga', searchYogaProgramm)
// Find 4 Recommendation Meditation Programm
app.get('/api/recommendedyoga', searchRecommendedYogaProgram)
// Yoga Details
app.get('/api/getyoga/:id', getYogaDetails)

// Get one random meditation programm for the home component
app.get('/api/getrandommeditation', getOneRandomMeditation)
// Search Meditation Programm
app.get('/api/findmeditation', searchMeditationProgram)
// Find 4 Recommendation Meditation Programm
app.get('/api/recommendedmeditation', searchRecommendedMeditationProgram)
// Meditation Details
app.get('/api/getmeditation/:id', getMeditationDetails)



app.listen(PORT, () => console.log("Server was started on Port ", PORT))