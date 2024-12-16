const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
    const connection = mysql.createConnection({
        multipleStatements: true,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'pim_database',
    });

    connection.connect();

    connection.query('SELECT * FROM students WHERE id = 3 or id = 9',  (error, rows, fields) => {
        if (error) throw error;

        console.log(rows);
        res.json(rows);
    })

    connection.end();
});

app.listen(3000, () => {
    console.log('server run on port 3000');
});