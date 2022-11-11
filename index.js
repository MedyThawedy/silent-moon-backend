import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { registerUser, loginUser } from './controller/userController.js'
import { verifyBearer } from './controller/authController.js'

const PORT = process.env.PORT
const app = express()

//middleware
//app.use(cors({origin: "http://localhost:3000"}));
app.use(morgan('dev'))
app.use(cors())
//app.use(express.json({ limit: '10mb' }))
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb' }));


//CRUDS 
//User Registration
app.post('/api/registration', registerUser)
//User Login
app.post('/api/login', loginUser)

app.get('/api/verify', verifyBearer)

app.listen(PORT, () => console.log("Server was started on Port ", PORT))