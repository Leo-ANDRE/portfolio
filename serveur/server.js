const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var nodemailer = require('nodemailer');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.post('/email', function (req, res) {
  let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'windows'
  });
  transporter.sendMail({
      from: req.body.email,
      to: 'leo.andre12@laposte.net',
      subject: 'Portfolio',
      text: req.body.message
  }, (err, info) => {
    if(err) {
      res.send({message : "email non envoye"});
    }
    console.log(info.envelope);
    console.log(info.messageId);
    info.message.pipe(process.stdout);
    res.send({message : "email envoye"});
  });
});

app.listen(3333, function () {
  console.log('serveur lancé')
});
