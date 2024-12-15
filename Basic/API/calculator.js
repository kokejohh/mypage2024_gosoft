const express = require('express');
const path = require('path');

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: path.join(__dirname)});
});

app.post('/', (req, res) => {
    console.log(req.body);
    const { num1, num2, submit} = req.body;

    console.log(submit);
    let result;
    switch(submit) {
        case 'plus':
            result = Number(num1) + Number(num2);
            break;
        case 'minus':
            result = Number(num1) - Number(num2);
            break;
        default:
            result = 'Not Calculate';
    }
    res.send(`answer is ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});