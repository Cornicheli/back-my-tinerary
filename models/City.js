const mongoose = require('mongoose')
const schema = new mongoose.Schema({
      name: { type: String, required: true },
      continent: { type: String, required: true },
      photo: { type: String, required: true },
      population: { type: Number, require: true },
      userId: { type: String, required: true },
})

const City = mongoose.model('city', schema)
module.exports = City