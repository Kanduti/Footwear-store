const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const obucaRouter = require('./controllers/obuca')
const con = require('./mySqlDb')
const path = require('path');
app.use(express.json());
//app.use(express.static(path.join(__dirname, "/build")));
app.use(cors())
  app.use(express.static('build'));
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  app.use('/api/obuca', obucaRouter)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
  });


  
 
 
  module.exports = app

