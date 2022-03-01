const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
  {
    contry_name: {type: String, required: true}
  },
  {timestamps: true}
)

module.exports = mongoose.model('countries', Country)