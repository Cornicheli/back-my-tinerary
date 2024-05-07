const joi = require("joi");

const schema = joi.object({
    name: joi.any(),
    photo: joi.any(),
    showId: joi.any(),
    userId: joi.any(),
    date: joi.date().required().messages({
        "any.required": "This field is required.",
        "number.empty": "This field is empty, please, introduce a date.",
    }),
    comment: joi.string().required().min(3).max(50).messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a name.",
        "string.min": "Introduce a comment with a minimum of 3 letters.",
        "string.max": "Introduce a ccomment with max than 50 letters.",
    }),
});

module.exports = schema;
