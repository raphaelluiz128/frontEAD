var express = require('express');

var app = express();
const cors = require('cors');
app.use(cors({}));
const server = require('http').Server(app);
console.log('ok');
app.use(express.static(__dirname+'/app/index.html'));
server.listen((process.env.PORT || 3200), function(){
    console.log(__dirname+'/app/index.html');
  });