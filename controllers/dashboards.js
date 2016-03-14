var express = require('express'),
    router = express.Router(),
    Dashboards = require('../models/dashboards');

/**
 * /dashboards
 * @name  dashboards
 * @param  {null} / return all dashboards
 */
router.get('/', function (req, res) {
  Dashboards.get(req.query, function (err, response) {
    res.json( response );
  });
});

module.exports = router;