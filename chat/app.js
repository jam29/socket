// index.js
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(server)

app.use(
  express.static( path.join(__dirname, '/public') )
)

io.on('connection', socket => {
  console.log(`un client s'est connecté. socket:${socket.id}`)
  socket.on('chat', message => {
    io.emit('chat', {message, id: socket.id})
  })
})

const port = process.env.PORT || 3300
server.listen(port, ()=> {
  console.log('listening on: ', port)
})
