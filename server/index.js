let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3005;
let rooms = [];
let users = [];

io.on("connection", function(socket) {
    socket.emit("rooms", rooms)
    
    socket.on("join_room", ({name, room}) => {
        joinRoom(name, socket.id , room)
       
        console.log(rooms);
        console.log(name +' joined ' + room);

      socket.join(room);
      
      io.to(room).emit('users', getRoomUsers(room))
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
      
      var user = users.filter(x => x.Socket == socket.id)[0];
      var index = users.findIndex(x => x.Socket == socket.id);
      users.splice(index, 1)
      
      console.log(user.Name + ' left ' + user.Room);
      io.to(user.Room).emit('users', getRoomUsers(user.Room))
      
    });
});

function getRoomUsers(room){
  return users.filter(x => x.Room == room)
}

function joinRoom(name, socket, room) {
  users.push({Name: name, Socket: socket, Room: room})

  if (rooms.filter(x => x == room).length != 1){
    rooms.push(room)
  } 
}

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});