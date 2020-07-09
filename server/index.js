let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3005;
let rooms = [];

io.on("connection", function(socket) {
    console.log("a user connected");
    console.log(rooms);
    socket.emit("rooms", rooms)
    
    socket.on("join_room", ({name, room}) => {
        if (1 == 1){
            rooms.push(room)
        }
        console.log(name +' joined room ' + room);
      socket.join(room);
    });
  
    socket.on("message", ({ room, message }) => {
        console.log("message recieved in " + room + message);
      io.to(room).emit("message", message);
    });
  
    socket.on("typing", ({ room }) => {
      socket.to(room).emit("typing", "Someone is typing");
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});