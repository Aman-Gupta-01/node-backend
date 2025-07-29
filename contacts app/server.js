import express from "express"
import dotenv from 'dotenv';
import contactRouter from './routes/contactRoute.js'
import usersRoute from './routes/usersRoute.js'
import { errorHandler } from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";

dotenv.config();
connectDb()
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/v1/contacts', contactRouter)
app.use('/api/v1/users', usersRoute)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log("Yeeye! We're connected to:",PORT);
})