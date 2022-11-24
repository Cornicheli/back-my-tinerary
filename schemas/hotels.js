const Joi = require("joi");

const schema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(3)
    .max(40)
    .messages({
      "string.base": "Please enter words",
      "any.required": "This field is required, please enter it",
      "string.min":"Please enter your full name",
      "string.max": "Please verify your name"
    }),
  photo: Joi
    .string()
    .required()
    .uri()
    .messages({
      "string.base": "Please enter words",
      "string.empty": "Complete the URL photo, please",
    }),
  capacity: Joi
    .number()
    .required()
    .min(2)
    .messages({
      "string.base": "Please enter words",
      "number.empty": "Enter the number of the capacity please",
      "number.base": "Enter the number of the capacity please",
      "number.min": "Please enter a higher capacity number"
    }),
  cityId: Joi.any(),
  userId: Joi.any(),
});
module.exports = schema;
