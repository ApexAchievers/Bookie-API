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
    Category:{
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Thriller', 'Biogragphy', 'History', 'Children', 'Other'],
        required: true,
    }
    
}, {
    timestamps: true,
});
 export const Book = mongoose.model('book', bookSchema);