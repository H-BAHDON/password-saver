const mysql = require('mysql');

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

module.exports = connection;