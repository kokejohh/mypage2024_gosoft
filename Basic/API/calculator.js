const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
//app.use(cors({ origin: 'http://localhost:5500'}));
//app.use(cors());
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

app.get('/bmi', (req, res) => {
    res.sendFile('bmiCalculator.html', { root: path.join(__dirname) });
});

app.post('/bmi', (req, res) => {
    const { weight, height} = req.body;

    const bmi = Math.round(weight / height**2); 
    const criteria = (bmi <= 18.5) ? 'too thin' :
                    (bmi < 23) ? 'normal' :
                    (bmi < 25) ? 'over normal' :
                    (bmi < 30) ? 'fat': 'too fat';
     res.send("คุณมีค่า BMI = " + bmi + " , คุณอยู่ในเกณฑ์ = " + criteria);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});