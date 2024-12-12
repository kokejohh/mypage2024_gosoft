//import http from 'http';
const http = require('http');
const port = 8080;

// Create a server object:
const server = http.createServer(function(req, res) {
    if (req.url === '/' && req.method === 'get') {
        res.write('Hello World');
    }
    if (req.url === '/info' && req.method === 'GET') {
        res.write('Info');
    }
    res.end();
});


server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening or port : ' + port);
    }
});
