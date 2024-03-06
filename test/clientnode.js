const io = require("socket.io-client")

let socket = io("http://localhost:3030")

socket.on("connect", () => {
    console.log("connection établie")
    socket.emit("room", "requete from client")
    console.log("je sors")    
    process.exit();
})

