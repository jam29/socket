const express = require('express') // Importing Express
const app = express() // Creating Express Server
const host = 'localhost' // Specifying Host
const port = 8000 // Specifying Port number
const http = require('http').Server(app);

// Initializing socket.io object
const io = require('socket.io')(http,{ cors: { origin: "*", } })

io.on("connection",(socket) => {
 console.log("ok");
 socket.on("user-connected",(username)=>{
 console.log(`Receiver ${username} connected..`)
});

})

http.listen(port, host, () => console.log(`Listening on http://${host}:${port}/`))
