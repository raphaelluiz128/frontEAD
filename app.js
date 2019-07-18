var express = require('express');

var app = express();
const cors = require('cors');
app.use(cors({}));
const server = require('http').Server(app);
console.log('ok');
app.use(express.static(__dirname+'/'));
server.listen((process.env.PORT || 3200), function(){
    console.log('listening on',process.env.PORT);
  });