var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(pageName('index'));
});

app.get('/pricing', function(req, res) {
  res.sendFile(pageName('pricing'));
});

app.get('/product', function(req, res) {
  res.sendFile(pageName('product'));
});

app.listen(port, () => {
  console.log('The express server is running on port ' + port);
});

function pageName(page) {
  return __dirname + '/public/pages/' + page + '.html';
}