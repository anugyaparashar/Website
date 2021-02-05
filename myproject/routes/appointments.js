var express = require('express');
var router = express.Router();
//var booking=require('../models/book');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('appointments');
});






module.exports = router;
