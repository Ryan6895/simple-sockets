let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3005;

// io.on('connection', (socket) => {
//     console.log('connected');
    

//     socket.on('new-message', (message) => {
//         io.emit('new-message', message);
//         console.log(message);
//         });      

// });

io.on("connection", function(socket) {
    console.log("a user connected");
    room = "room1"
    socket.on("join_room", room => {
        console.log('joined room ' + room);
      socket.join(room);
    });
  
    socket.on("message", ({ room, message }) => {
        console.log("message recieved in " + room + message);
      socket.to(room).emit("message", message);
    });
  
    socket.on("typing", ({ room }) => {
      socket.to(room).emit("typing", "Someone is typing");
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});