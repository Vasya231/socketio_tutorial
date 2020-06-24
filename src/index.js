import socketio from 'socket.io-client';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Scripts started');

  const io = socketio();

  const formElement = document.getElementById('chat-form');
  const msgListElement = document.getElementById('messages');

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const message = formData.get('message');
    io.emit('chat message', message);
    target.reset();
  });

  io.on('chat message', (message) => {
    const messageElement = document.createElement('li');
    messageElement.textContent = message;
    msgListElement.append(messageElement);
  });
});
