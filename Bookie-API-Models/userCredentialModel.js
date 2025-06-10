//import mongoose
import mongoose from "mongoose"

//import bcrypt for password hashing
import bcrypt from 'bcrypt'

//Define your schema and create a variable for it
export const userSchema =  new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
        required: true
    },
    
}, {
    timestamps: true,
});
    userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
    });
export const User = mongoose.model('User', userSchema);