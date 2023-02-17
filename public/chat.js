const socket = io();

//Dom elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', ()=>{
    console.log('Enviado data ')
    console.log('chat emit')
    socket.emit('chat:message',  {
        username: username.value,
        message: message.value
    });
});

socket.on('chat:message', (data)=>{
    console.log('chat on', data)
    output.innerHTML += `<p>
    <strong>${data.username}:</strong> ${data.message}
    </p>`
})
console.log('Chat');