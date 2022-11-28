const Joi = require("joi");

const schema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(3)
    .max(40)
    .messages({
      "string.base": "Please enter a text at name field",
      "any.required": "This field is required, please enter it",
      "string.min": "Minimum 3 characters",
      "string.max": "Maximum 40 characters",
    }),
  photo: Joi
    .string()
    .required()
    .uri()
    .messages({
      "string.base": "Please enter a valid URL at photo field",
      "string.empty": "The photo field is empty, please enter it",
    }),
    description: Joi
    .string()
    .required()
    .messages({
      "string.base": "Please enter a description of the hotel",
      "string.empty": "The description field is empty, please enter it",
    }),
  price: Joi
    .number()
    .required()
    .min(1)
    .messages({
      "number.empty": "The price field is empty, please enter it",
      "number.base": "You must enter a number at price field",
      "number.min": "Please enter a higher price number at price field",
    }),
    date: Joi
    .date()
    .required()
    .messages({
      "date.base": "Please enter a valid date",
      "date.empty": "The date field is empty, please enter it",
    }),
  hotelId: Joi.any(),
  userId: Joi.any(),
})

module.exports = schema;