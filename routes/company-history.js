const express = require('express');
const router = express.Router();

/* GET company-history page. */
router.get('/', function(req, res, next) {
  res.render('company-history', { title: 'Company-History' });
});

module.exports = router;
