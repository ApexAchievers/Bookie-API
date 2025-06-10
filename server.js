//Import express, mongoose, cors, dotenv and userRoute 
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./bookie-API-Routes/userCredentialRoute.js"
import bookRoute from "./bookie-API-Routes/bookRoutes.js"


dotenv.config();
//Create a variable for express
const app =  express();



//define logics to use imported files
app.use(express.json())
app.use(cors())
app.use('/User', userRoute)
app.use('/books', bookRoute)

//connect server to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));


// create a port for the server
const Port = process.env.Port || 7080

//let the app listen to the port
app.listen(Port, () => {
    console.log(`server is listening on ${Port}`)
})
