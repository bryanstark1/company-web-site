const express = require('express');
const router = express.Router();
const pastworkCtrl = require('../controllers/pastwork');


// All actual paths start with '/past-work'

// GET /past-work
router.get('/', pastworkCtrl.index);
// GET /past-work/new
router.get('/new', pastworkCtrl.new);
// GET /past-work/:id
router.get('/:id', pastworkCtrl.show);
// POST /past-work/
router.post('/', pastworkCtrl.create);

module.exports = router;
