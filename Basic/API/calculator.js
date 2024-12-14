const express = require('express');
const QueryString = require('qs');
const { queryObjects } = require('v8');

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    console.log(req.body);
    const { num1, num2 } = req.body;
    const result = Number(num1) + Number(num2);
    res.send(`answer is ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});