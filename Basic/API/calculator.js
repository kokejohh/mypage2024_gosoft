const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const http = require('http');

const app = express();
//app.use(cors({ origin: 'http://localhost:5500'}));
//app.use(cors());
// app.use(express.json());
app.use(express.static('public'));
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

app.get('/kanye', async (req, res) => {
    try {
    const response = await axios.get('https://api.kanye.rest/');
    console.log(response.data);

    const responseTest= await axios(
        {
            method: 'get',
            url: 'https://api.kanye.rest/'
        }
    )
    console.log(responseTest.data);

    const reqHttp = http.request({
        hostname: 'localhost',
        port: '3000',
        path: '/weather',
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }, res2 => {
        let output = '';
        console.log(res.statusCode);
        res2.on('data', chunk => {
            output += chunk;
        });
        res2.on('end', () => {
            let obj = JSON.parse(output);
            // res.json(obj);
        });
    })
    reqHttp.end();

    const response2 = await fetch('https://api.kanye.rest/');
    console.log(await response2.json());

    res.json(response.data);
    } catch (error) {
        res.status(404).json({message: 'Not founded'});
    }

});

app.get('/weather', async (req, res) => {
    const response = await axios.post('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1e9337b3055fef44005cc4d61842ed62&units=metric');
    const { data } = response;

    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});