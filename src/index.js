import express from 'express';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});

httpServer.listen(3000, () => console.log('Listening on *:3000'));
