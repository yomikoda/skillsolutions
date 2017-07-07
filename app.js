var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));
app.use('/imgs', express.static('assets/imgs'));
app.use('/fonts', express.static('assets/fonts'));



app.get('/DRH', function(req, res){
  res.sendFile(__dirname + '/tpl/index_DRH.html');
});

app.get('/DG', function(req, res){
  res.sendFile(__dirname + '/tpl/index_DG.html');
});

app.get('/DI', function(req, res){
  res.sendFile(__dirname + '/tpl/index_DI.html');
});

app.get('/CI', function(req, res){
  res.sendFile(__dirname + '/tpl/index_CI.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
