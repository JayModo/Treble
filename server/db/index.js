const router = require('express').Router
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://Jaymodo9117:<Jaymodo123>@cluster0-ps7hz.mongodb.net/test?retryWrites=true&w=majority'
let connection = mongoose.connection
const Instruments = require('../models/Instruments')

mongoose.connect(connectionString)
connection.on('error', err => {
  console.log('ERROR FROM DATABASE', err)
})

connection.once('open', () => {
  console.log("succesfully connected to Database")
})

