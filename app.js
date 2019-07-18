var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var app = express();
const cors = require('cors');
app.use(cors({}));


app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/app', 'index.html'));
});
app.listen((process.env.PORT || 3600), function(){
    console.log('./app/index.html');
  });
  
 