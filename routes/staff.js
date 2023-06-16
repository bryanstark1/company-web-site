const express = require('express');
const router = express.Router();
const staffCtrl = require('../controllers/staff');


// All actual paths start with '/staff'

// GET /staff
router.get('/', staffCtrl.index);
// GET /staff/new
router.get('/new', staffCtrl.new);
// GET /staff/:id
router.get('/:id', staffCtrl.show);
// GET /staff/:id/edit
router.get('/:id/edit', staffCtrl.edit);
// POST /staff
router.post('/', staffCtrl.create);
// DELETE /staff/:id
router.delete('/:id', staffCtrl.delete);
// PUT /staff/:id
router.put('/:id', staffCtrl.update);

module.exports = router;
