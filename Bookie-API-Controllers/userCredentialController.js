//import addUser file to controller
import { User } from "../Bookie-API-Models/userCredentialModel.js";

//Define and export a controller function that creates a new user
export const signUp = async(req, res) =>{
    const {fullName, Email, Password, Role} = req.body;

    try {
        const newUser = new User({fullName, Email, Password, Role});
        await newUser.save();
        res.status(201).json({ mesaage: 'User registered successfully'})
    } catch (error){
        res.status(400).json({ error: 'Something went wrong'})
    }
};



// Create and export Login Controller fuction that allows users to login
export const logIn = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const newUser = await User.findOne({ Email });
    if (!newUser) return res.status(401).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(Password, newUser.Password);
    if (!isMatch) return res.status(401).json({ error: 'You entered an incorrect password' });

    // Throw a feedback message
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

