var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname + '/index.html'))
});
app.get('/productos.html', function (req, res){
	res.sendFile(path.join(__dirname + '/productos.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))