const express = require("express");
const mysql = require('mysql');
const http = require('http');
const {error} = require('console');
const {resourceLimits} = require('worker_threads');


const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const {socket} = require('dgram');
const io = new Server(server, {
    cors: {
        origin:['http:localhost:3000'],
    },
});

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

io.on('connection', (socket) => {
    console.log('クライアントと接続しました');
    socket.on('disconnect', () => {
        console.log('クライアントと接続が切れました');
    });
});

/*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'banana77',
    database: 'list_app'
})*/

//ここから中身--------------------------------------------------------------------------------------



const PORT = 5000;
server.listen(PORT, () => console.log(`server is runnng on ${PORT}`));