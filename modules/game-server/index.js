// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5001);
app.use('/static', express.static(__dirname + '/static'));
// Routing

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/loading', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/canvas', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});




// Starts the server.
server.listen(5001, function() {
    console.log('Starting server on port 5001');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
    console.log("socketIO connected successfully");
    console.log("Socket connected: " + socket.id);

    socket.on('action', (action) => {

        if(action.type === 'server/NEW_CLIENT_LANDED'){
            socket.emit('action', {type:'client/NEW_CLIENT_CONNECTED', data:{
                socketID: socket.id
            }});
        }

        if(action.type === 'server/INIT_USER'){

            console.log("New user being added: ", action.data);
            socket.emit('action', {type:'client/USER_INITIALIZED', data:{
                socketID: socket.id
            }});
        }
    });

    socket.on('disconnect', function() {
        console.log("disconnect: ", socket.id);
    });

}, function(error) {
    console.log(error)
});

setInterval(function() {
    io.sockets.emit('message', 'hie!');
}, 1000);
