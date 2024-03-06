const express = require('express'); 
const app = express();
// const cors = require('cors');
const http = require('http').Server(app);

//const server = app.listen( 3030 , console.log("server démarré sur le port 3030") );
const io = require('socket.io')(http,{ cors:{origin: "*" }});

io.on('connection', (socket) => {
    console.log("Client connected!");
    socket.on('message-from-client-to-server', (msg) => {
        console.log(msg);
    })

    socket.on('bonjour', (data) => {
        console.log(data)
        socket.emit('message', 'message aux inscrits de la chambre'+data)
    })

    socket.emit('message-from-server-to-client', 'Hello le server ecoute les clients! ');
});
http.listen(3030,"localhost");
