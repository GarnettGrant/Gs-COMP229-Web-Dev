var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/Products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
module.exports = router;
