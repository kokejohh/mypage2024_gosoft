// const http = require('http');
// const port = 8080;

// // Create a server object:
// const server = http.createServer(function(req, res) {
//     if (req.url === '/' && req.method === 'get') {
//         res.write('Hello World');
//     }
//     if (req.url === '/info' && req.method === 'GET') {
//         res.write('Info');
//     }
//     res.end();
// });


// server.listen(port, function (error) {
//     if (error) {
//         console.log('Something went wrong', error);
//     } else {
//         console.log('Server is listening or port : ' + port);
//     }
// });

const express = require('express');
const app = express();
const info = require('./info');

const PORT = 8080;

//app.use(express.json())
app.use('/info', info);

app.use('/love', (req, res, next) => {
    console.log('middle');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/love', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Who', 'me');
    res.end(JSON.stringify({message: 'love'}));
});

app.get('/hate', (req, res) => {
    res.setHeader('Who', 'me');
    res.json({message: 'hate'});
})

app.listen(PORT, () => {
    console.log('server live');
});