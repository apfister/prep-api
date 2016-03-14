var express = require('express'),
    router = express.Router();

router.use('/dashboards', require('./dashboards'));

router.get('/', function (req, res) {
  res.json( { 'meta' : 'info about the api goes here' } );
});

module.exports = router;