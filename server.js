var express = require('express');//LIB USED TO CREATE A SERVER
var morgan = require('morgan');//HELP O/P LOG OF OUR SERVER
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/arcticle-one', function (req, res) {
  res.send('article 1 will be served here');
});
app.get('/arcticle-two', function (req, res) {
  res.send('article 2 will be served here');
});
app.get('/arcticle-third', function (req, res) {
  res.send('article 3 will be served here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80; // Use 8080 for local development because you might already have apache running on 80
 app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
