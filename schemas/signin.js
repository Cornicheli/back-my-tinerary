const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().required().min(3).max(40).messages({
    "string.base": "Please enter a text at name field",
    "any.required": "This field is required, please enter it",
    "string.min": "Minimum 3 characters",
    "string.max": "Maximum 40 characters",
  }),
  password: Joi.string().required().messages({
    "string.base": "Please enter a text at name field",
    "any.required": "This field is required, please enter it",
  }),
});
module.exports = schema;
