const express = require ('express');
const mysql = require('mysql');

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

//create database
// app.get('/createdb',(req,res) => {
  // let sql = 'CREATE DATABASE nodemysql';
  // db.query(sql,(err,result) => {
  //   if (err) {throw err};
  //   console.log(result);
  //   res.send('database created...')
  // });
// });

//create table
app.get('/createpoststable',(req,res) => {
  let sql ='create table posts(id int AUTO_INCREMENT,title varchar(255),body varchar(255), primary key(id))';
  db.query(sql,(err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Posts table created...');
  });
});

//insert post 1
app.get('/addpost1',(req,res)=>{
  let post = {title: 'post1', body: 'this is post number 1'};
  let sql = 'insert into posts set ?';
  let query = db.query(sql,post,(err, result) => {
    console.log(result);
    res.send('Insert value to posts...');
  })
})

//insert post 2
app.get('/addpost2',(req,res)=>{
  let post = {title: 'post2', body: 'this is post number 2'};
  let sql = 'insert into posts set ?';
  let query = db.query(sql,post,(err, result) => {
    console.log(result);
    res.send('Insert value 2 to posts...');
  })
})

//select posts
app.get('/getposts', (req,res) => {
  let sql = 'select * from posts';
  db.query(sql,(err,result) => {
    console.log(result);
    res.send('Here is the result from posts');
  });
})


// select single post
app.get ('/post/:id', (req,res) => {

  let sql = `select * from posts where id = ${req.params.id}`;
  let query = db.query(sql,(err,result) => {
    if (err) throw err;
    //if(err) {console.log('can not get the record!!')};
    console.log(result);
    res.send('Here the one result!!!');
  });
});

//update post
app.get ('/updatepost/:id', (req,res) => {
  let newTitle = 'Undated Title';
  let sql = `update posts set title = '${newTitle}' where id = ${req.params.id}`;
  let query = db.query(sql,(err,result) => {
    if (err) throw err;
    //if(err) {console.log('can not get the record!!')};
    console.log(result);
    res.send('Post updated!!!')
  });
});

app.get ('/delete/:id', (req,res) => {
  let sql = `delete from posts where id = ${req.params.id}`;
  let query = db.query(sql,(err,result) => {
    if (err) throw err;
    //if(err) {console.log('can not get the record!!')};
    console.log(result);
    res.send('Record deleted!!!')
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});



// const express = require('express');
// const mysql = require('mysql');

// // Create connection
// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : ''
//     //database : 'nodemysql'
// });

// // Connect
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql Connected...');
// });

// const app = express();

// // Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// app.listen('3000', () => {
//     console.log('Server started on port 3000');
// });