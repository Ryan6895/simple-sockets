let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3005;

io.on('connection', (socket) => {
    console.log('connected');
    

    socket.on('new-message', (message) => {
        io.emit('new-message', message);
        console.log(message);
        });
});



server.listen(port, () => {
    console.log(`started on port: ${port}`);
});