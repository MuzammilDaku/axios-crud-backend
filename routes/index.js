var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('Backend For Crud App By Muzammil Abbas Khan Baloch')
});

module.exports = router;
