import express from 'express';
import http from 'http';
import path from 'path';
import socket from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = socket(httpServer);

const pathToHtml = path.join(__dirname, '../../assets/index.html');
const pathToScripts = path.join(__dirname, '../../dist/main.bundle.js');

app.get('/', (req, res) => {
  res.sendFile(pathToHtml);
});

app.get('/assets/index.js', (req, res) => {
  res.sendFile(pathToScripts);
});

io.on('connection', () => {
  console.log('User connected');
});

httpServer.listen(3000, () => console.log('Listening on *:3000'));
