const express = require('express');
const app = express()
const http= require('http');
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)


app.get('/',(_req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('client connected');
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    });
    socket.on('disconnect',()=>{
        console.log('client disconnected')
    });
})



server.listen(3000,()=>{
    console.log('server running on port 3000')
})