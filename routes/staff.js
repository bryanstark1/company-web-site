const express = require('express');
const router = express.Router();
const staffCtrl = require('../controllers/staff');


// All actual paths start with '/staff'

// GET /staff
router.get('/', staffCtrl.index);
// GET /staff/:id
router.get('/:id', staffCtrl.show);

module.exports = router;
