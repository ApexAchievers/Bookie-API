import joi from "joi"

const bookValidationSchema = Joi.object({
  Title: joi.string().min(2).max(100).required().messages({
    "string.empty": "Title is required",
    "any.required": "Title is required",
  }),
  Author: joi.string().min(2).max(100).required().messages({
    "string.empty": "Author is required",
    "any.required": "Author is required",
  }),
  Description: joi.string().min(10).max(1000).required().messages({
    "string.empty": "Description is required",
    "any.required": "Description is required",
  }),
  yearPublished: joi.string().pattern(/^\d{4}$/).required().messages({
    "string.empty": "Year Published is required",
    "string.pattern.base": "Year Published must be a 4-digit year",
    "any.required": "Year Published is required",
  }),
});

module.exports = { bookValidationSchema };
