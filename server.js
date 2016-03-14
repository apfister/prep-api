var express = require('express'),
    app = express(),
    fs = require('fs'),
    cors = require('cors'),
    port = process.env.PORT || 3000;

app.use(cors());

app.use( require('./controllers') );

app.listen(port, function () {
  console.log('server ready ..');

  _DASHBOARDS = JSON.parse( fs.readFileSync('data/dashboards.json') );

  console.log('ready!');
});