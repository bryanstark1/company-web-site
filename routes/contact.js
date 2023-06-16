const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');


// All actual paths start with '/contact'

// GET /contact
router.get('/', contactCtrl.index);
// GET /contact
router.get('/', contactCtrl.new);
// POST /contact
router.post('/', contactCtrl.create);


module.exports = router;
