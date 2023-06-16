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
// GET /past-work/:id/edit
router.get('/:id/edit', pastworkCtrl.edit);
// POST /past-work/
router.post('/', pastworkCtrl.create);
// PUT /past-work/:id
router.put('/:id', pastworkCtrl.update);

module.exports = router;
