import socket from 'socket.io-client';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Scripts started');

  const io = socket();

  const formElement = document.getElementById('chat-form');
  console.log(document.body);

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const message = formData.get('message');
    io.emit('chat message', message);
    target.reset();
  });
});
