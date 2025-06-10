// bookie-API-Routes/bookRoute.js

import express from "express";
import {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from "../Bookie-API-Controllers/bookController.js";

const bookRoute = express.Router();

// Route to add a new book
bookRoute.post("/", addBook);

// Route to get all books
bookRoute.get("/", getAllBooks);

// Route to get a single book by ID
bookRoute.get("/:id", getBookById);

// Route to update a book by ID
bookRoute.put("/:id", updateBook);

// Route to delete a book by ID
bookRoute.delete("/:id", deleteBook);

export default bookRoute;
