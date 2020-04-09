const WebSocket = require('ws');

const URL = 'ws://localhost:8080';
const ws = new WebSocket(URL);

ws.on('open', () => {
    console.log(`Connected successfully to ${URL}`);
    ws.send('Hello from the client!');
})

ws.on('message', msg => {
    console.log(`recv: ${msg}`);
    console.log('Closing...');
    ws.close();
})
