import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'

// Initialize Express
const app = express()

// Connect Database and Cloudinary
connectDB()
connectCloudinary()

// Middlewares
app.use(cors({
    origin: [
        "https://lms-full-stack-beige.vercel.app"
    ],
    credentials: true
}))

app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => {
    res.send("API Working")
})

app.post('/clerk', express.json(), clerkWebhooks)

app.post(
    '/stripe',
    express.raw({ type: 'application/json' }),
    stripeWebhooks
)

app.use('/api/educator', express.json(), educatorRouter)

app.use('/api/course', express.json(), courseRouter)

app.use('/api/user', express.json(), userRouter)
export default app
