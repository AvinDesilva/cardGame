// Module imports
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Express and Socket.IO setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Port setup
const port = process.env.PORT || 3000;

// Express routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Socket.IO events
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Server listen
server.listen(port, () => {
  console.log(`Server running and listening for socket connections on http://localhost:${port}`);
});
