const path = require('path')
const express = require('express');
const app = express();

//settings
app.set('port', 3001);

const server = app.listen(app.get('port'),()=>{
    console.log('Server Listen on port ', app.get('port'), `http://localhost:${app.get('port')}/`)
})

//Static files
app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public'));

// Modulo
const SocketIO = require('socket.io');

// Inicializa Socket io con el server
const io = SocketIO(server);

// websockets
io.on('connection',(socket)=>{
    console.log('Conexión socket ID', socket.id)
    
    socket.on('chat:message', (data)=>{
        console.log('Server on', data)
        io.sockets.emit('chat:message', data);
    })
}) 

// localhost:3001/socket.io/socket.io.js


