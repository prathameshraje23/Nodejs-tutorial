const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Welcome to our home page`);
    }
    else if (req.url === '/about') {
        res.end(`Why you want to know about ?`);
    }
    res.end(`
    <h1>Oops!</h1>
    <p>This is wrong url.....</p>
    <a href="/">Go Home</a>
    `
    );
});

server.listen(5000);
