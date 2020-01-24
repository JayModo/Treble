import mongoose from "mongoose"
import UserService from "./UserService"

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  brand: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  img: { type: String, default: 'https://placehold.it' },
}, { timestamps: true })

export default class InstrumentService {
  get repository() {
    return mongoose.model('instruments', _model)
  }
}