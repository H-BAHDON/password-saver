const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8605460',
  password: 'your-database-password',
  database: 'sql8605460'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM my_table', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});