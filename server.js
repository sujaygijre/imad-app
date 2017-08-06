var express = require('express');//LIB USED TO CREATE A SERVER
var morgan = require('morgan');//HELP O/P LOG OF OUR SERVER
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'article one:sujay gijre',
    heading:'article one',
    date:'sep 5,2016',
    content:` <p>
                    this a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first aricle
                    </p>
                     <p>
                    this a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first aricle
                    </p>
                     <p>
                    this a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first ariclethis a text for my first aricle
                    </p>`
} ;
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=content;

var htmltemplate=`
<html>
    <head>
        <title>
           ${title}
            </title>
            <meta name="viewport" content="width+device+width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <a href="/">HOME</a>
                </div>
                <hr/>
                <h3>  ${heading}</h3>
                <div>  ${date}</div>
                <div>
                   ${content}
                    </div>
            </body>
            
</html>`
;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});
app.get('/article-two', function (req, res){ 
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-third', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-third.html'));
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
