var express = require('express');
var app = express();

app.get('/:name', function (req, res) {
  var userName = req.params.name
  var page = "<html>"+
                "<body>"+
                  "<h1>"+userName+"购物车"+"</h1>"
                "</body>"+
            "</html>"
  res.send(page)
});


app.listen(8000,function(){
  console.log('runing on port 8000...');
})
