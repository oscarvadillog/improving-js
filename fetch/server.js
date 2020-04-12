const chalk = require('chalk');
const http = require('http');

http.createServer((req, res) => {
    console.log(`New incoming HTTP request - Method: ${chalk.green(req.method)} - URL: ${chalk.yellow(req.url)}`);

    // Enable CORS
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Response
    res.writeHead(200, {'Content-Type': 'application/json'});
    const dt = new Date();
    res.write(JSON.stringify({
        name: 'Óscar',
        date: dt.toISOString(),
        hobbies: ['i', 'love', 'js', '=)'],
    }));

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end();
        })
    }
    else {
        res.end();
    }

}).listen(8080);
