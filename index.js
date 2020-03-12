const express = require('express');
const mysql = require('mysql');
const port = 5000;
const app = express();

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'polaris',
  database: 'acme'
});

db.connect();

app.get('/users', (req, res, next) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/users/developement', (req, res, next) => {
  const sql = `SELECT * FROM users WHERE dept = 'development'`;
  db.query(sql, (err, result) => {
    if (err) throw EvalError;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log('app listening at port ', +port);
});
