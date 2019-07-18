var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
const cors = require('cors');
app.use(cors({}));
app.use(express.static(__dirname));
app.listen(port);