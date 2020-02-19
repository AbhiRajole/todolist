const express = require('express');
const mysql = require('mysql');
//create database connection
const db=mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'demodb',
   
});



  const app = express();
 
  app.get('/dbdemo', (req,res) =>{
    db.connect(function(err) {
      if (err) throw err;
      //Select all customers and return the result object:
      db.query("SELECT * FROM register", function (err, result, fields) {
        if (err) throw err;
      res.send(result);
    });
  });
  });
  app.listen('3000', ()=> {
      console.log('server statred at port 3000');
  })
