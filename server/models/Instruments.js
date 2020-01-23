const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Instrument = new Schema({
  brand: { type: String, required: true },
  img: { type: Image },
  price: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('Instrument', Instrument)