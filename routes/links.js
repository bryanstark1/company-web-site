const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/links');


// All actual paths start with '/links'

// GET /links
router.get('/', linksCtrl.index);

module.exports = router;
