const chalk = require('chalk');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => parseConnection(ws));

const parseConnection = conn => {
    console.log(`New remote connection ${chalk.green('Hello')}`);
    conn.on('message', msg => {
        console.log(`recv: ${msg}`);
        conn.send('Hello from the server!');
    })
};
