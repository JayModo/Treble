const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Instrument = new Schema({
  brand: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  img: { type: Image },
  price: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('Instrument', Instrument)