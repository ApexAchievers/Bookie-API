//first import mongoose
import mongoose from "mongoose"

//eport and define a schema for your model
export const bookSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true,
    },
    Author:{
        type: String,
        required: true,
    },
    
    Description:{
        type: String,
        required: true,
    },
    yearPublished:{
        type: String,
        required: true,
    },
    
}, {
    timestamps: true,
});
 export const Book = mongoose.model('book', bookSchema);