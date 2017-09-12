var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var pageData={ title :  'Home Page', pagename : 'index/index.ejs' };
  res.render('layout.ejs', pageData);
});


module.exports = router;
