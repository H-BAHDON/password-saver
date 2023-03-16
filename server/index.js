const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: 'sql8.freemysqlhosting.net',
    user: 'sql8605460',
    password: 'Holloway12!"',
    database: 'Users',
  });

app.listen(3001, () => {
  console.log("running server");
});