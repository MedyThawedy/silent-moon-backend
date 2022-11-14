import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { verifyBearer } from './controller/authController.js'
import { router as userRouter } from './router/userRouter.js'
import { router as musicRouter } from './router/musicRouter.js'
import { router as yogaRouter } from './router/yogaRouter.js'
import { router as meditationRouter } from './router/meditationRouter.js'
import { router as reminderRouter } from './router/reminderRouter.js'


const PORT = process.env.PORT
const app = express()

https://javascript.plainenglish.io/how-to-fix-413-request-entity-too-large-error-in-node-js-226c0070e4f4
// fixing "413 Request Entity Too Large" errors
app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))//

// GridFs

//middleware
//app.use(cors({origin: "http://localhost:3000"}));
app.use(morgan('dev'))
app.use(cors())
//app.use(express.json({ limit: '10mb' }))
app.use(express.json())

app.use('/', userRouter)
app.get('/api/verify', verifyBearer)
app.use('/', musicRouter)
app.use('/', yogaRouter)
app.use('/', meditationRouter)
app.use('/', reminderRouter)



app.listen(PORT, () => console.log("Server was started on Port ", PORT))