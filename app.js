var express = require('express');

var app = express();
const cors = require('cors');
app.use(cors({}));
console.log('ok');
app.use(express.static('./app/index.html'));
app.listen((process.env.PORT || 3200), function(){
    console.log(__dirname+'/index.html');
  });