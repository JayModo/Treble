const express = require('express')
const server = express()
const port = 3000

server.get('/home', (req, res, next) => {
  res.status(200).send('success')
})

server.get("*", (request, response, next) => {
  response.status(404).send('<h1> 404 PAGE NOT FOUND<H1>')
})

server.listen(port, () => {
  console.log("server is running: ", port)
})