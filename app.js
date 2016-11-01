// var express = require('express');
// var app = express();
// app.use(express.static(__dirname));
// app.get('/', function (req, res) {
//    res.sendfile('exam.html', {root: __dirname});
// });

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("应用实例，访问地址为 http://%s:%s", host, port)

// })

var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
   res.send('hello');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})