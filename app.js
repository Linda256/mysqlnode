const express = require ('express');
const mysql = require('mysql')

//create connection;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

db.connect((err) => {if (err){
  throw err
  }
  console.log('MySql connected ...');
});


const app = express();

app.listen('3000', () => {
  console.log('Server started on port 3000');
})

