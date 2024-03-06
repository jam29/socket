const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (masocket) => {
  // un socket client se connecte
  
  console.log("connection - socket id:",masocket.id); 
  
  // le serveur serveur node reçoit un message avec des données
  // Ici il reçoit le message 'chat message' avec la donnée msg
  masocket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // le client renvoi un message 'chat message' avec d'autres données , ici : msg+ "ok nickel" 
    // à toutes les sockets même la mienne
	  io.sockets.emit('reponse chat message', msg+' ok nickel')
    // renvoyer à tout le monde sauf moi-même.
    //masocket.broadcast.emit('reponse chat message', msg+' ok nickel')
    // renvoyé à l'envoyeur seulement
    //  masocket.emit('reponse chat message', msg+' ok nickel');
    // masocket.to(masocket.id).emit('reponse chat message', msg+' ok nickel');
    
  });

})

http.listen(8030, () => {
  console.log('listening on *:8030');
});
