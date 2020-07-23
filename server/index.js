let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3005;
let rooms = [];
let users = [];
//room{name: name, users: ['Ryan']}

io.on("connection", function(socket) {
    socket.emit("rooms", rooms)
    
    socket.on("join_room", ({name, room}) => {
        joinRoom(name, socket.id , room)
       
        console.log(rooms);
        console.log(name +' joined ' + room);

      socket.join(room);
      console.log(rooms.filter(x => x.name== room.name)[0].users);
      io.to(room).emit('users', rooms.filter(x => x.name== room.name)[0].users)
      io.emit("rooms", rooms)
    });
  
    // socket.on("message", ({ room, message }) => {
    //     console.log("message recieved in " + room + message);
    //   io.to(room).emit("message", message);
    // });
  
    // socket.on("typing", ({ room }) => {
    //   socket.to(room).emit("typing", "Someone is typing");
    // });

    socket.on('disconnect', () => {
      
      console.log(socket.id);
      console.log('user left');

      
    });
});

function joinRoom(name, socket, room) {
  if (rooms.filter(x => x.name == room.name).length != 1){
    rooms.push({room: room, users: [{Name: name, socket: socket}]})
  } else {
    rooms.filter(x => x.name== room.name)[0].users.push({Name: name, socket: socket})
  } 
}

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});