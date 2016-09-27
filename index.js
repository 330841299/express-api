var express = require('express');
var app = express();

app.get('/song', function (req, res) {
  console.log('song');
});

app.get('/dapeng', function (req, res) {
  console.log('dapeng');
});
app.listen(4000,function(){
  console.log('runing on port 4000...');
})
