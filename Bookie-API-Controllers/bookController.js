import { Book } from "../Bookie-API-Models/bookModel.js";

//  Create a new book
export const addBook = async (req, res) => {
  try {
    const { Title, Author, Description, yearPublished, Category } = req.body;
     

    const newBook = new Book({
      Title,
      Author,
      Description,
      yearPublished,
      Category,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(400).json({ error: "Failed to add book", details: error.message });
  }
};

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

// Get one book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });

    res.status(200).json({ message: "Book updated", book: updatedBook });
  } catch (error) {
    res.status(400).json({ error: "Failed to update book" });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Book not found" });

    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
