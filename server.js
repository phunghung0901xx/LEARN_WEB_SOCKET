const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server)
// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

// Run when client connects
io.on('connection',socket =>{
    console.log('new WS Connection')
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
