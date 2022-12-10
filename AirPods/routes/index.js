var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница аирподс 1 */
router.get('/airpods1', function(req, res, next) {
  res.send("<h1>Страница аирподс1</h1>")
});
/* Страница аирподс 2 */
router.get('/kompot', function(req, res, next) {
  res.send("<h1>Страница аирподс 2</h1>")
});

/* Страница аирподс про */
router.get('/korthik', function(req, res, next) {
  res.send("<h1>Страница аирподс про</h1>")
});

module.exports = router;
