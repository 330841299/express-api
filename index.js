var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var page = "<html>"+
                "<body>"+
                  "<h1>Index.html</h1>"+
                "</body>"+
            "</html>"
  res.send(page)
});

app.get('/song', function (req, res) {
  var page = "<html>"+
                "<body>"+
                  "<h1>song.html</h1>"+
                "</body>"+
            "</html>"
  res.send(page)
});
app.listen(4000,function(){
  console.log('runing on port 4000...');
})
