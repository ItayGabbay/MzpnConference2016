var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, function() {
  console.log('listening');
});

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function(req, res, next) {
  res.sendFile('index.html');
})
app.post('/signUp', function(req, res, next) {
  fs.appendFile('users.txt', req.body.name + "," + req.body.email + "," + req.body.phoneNumber + "," + req.body.unitName + '\n', function(err) {
    if (err) {
      console.log("error writing to file");
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  });
});
