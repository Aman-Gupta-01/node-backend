import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log("this is socket", socket, "user connected:", socket.id);
    
    socket.on('message', (msg)=>{
        console.log("message received ", msg, " from ", socket.id)
        io.emit('message', msg)
    })

    socket.on('disconnect', ()=>{
        console.log("user disconnected: ", socket.id)
    })
})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});