//import express fro express
import express from "express"

//import controllers
import { signUp, logIn } from "../Bookie-API-Controllers/userCredentialController.js"

// Define and create a variable for the User route
const userRoute = express.Router();

//create your routes
userRoute.post('/signup', signUp);
userRoute.post('/login', logIn);

export default userRoute;