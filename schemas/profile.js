const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().required().min(3).max(40).messages({
        "string.base": "Please enter words",
        "any.required": "This field is required, please enter it",
        "string.min": "Please enter your full name",
        "string.max": "Please verify your name",
    }),
    lastName: Joi
    .string()
    .required()
    .min(3)
    .max(40)
    .messages({
        "string.base": "Please enter words",
        "any.required": "This field is required, please enter it",
        "string.min": "Please enter your full lastName",
        "string.max": "Please verify your lastName",
    }),
    photo: Joi.string().required().uri().messages({
        "string.base": "Please enter words",
        "string.empty": "Complete the URL photo, please",
    }),
    age: Joi.number().required().min(2).messages({
        "string.base": "Please enter words",
        "number.empty": "Enter the number of the age please",
        "number.base": "Enter the number of the age please",
        "number.min": "Please enter a higher age number",
    }),
    email: Joi.string().required().min(3).max(40).email().messages({
        "string.base": "Please enter words",
        "any.required": "This field is required, please enter it",
        "string.min": "Please enter your full email",
        "string.max": "Please verify your email",
    }),
});
module.exports = schema;