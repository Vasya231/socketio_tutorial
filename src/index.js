import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const httpServer = http.createServer(app);

app.get('/', (req, res) => {
  const pathToIndex = path.join(__dirname, '../assets/index.html');
  res.sendFile(pathToIndex);
});

httpServer.listen(3000, () => console.log('Listening on *:3000'));
