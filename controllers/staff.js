const Staff = require('../models/staff');

const index = (req, res) => {
  res.render('staff/index', {
    staff: Staff.getAll(),
    title: 'Staff'
  });
};

const show = (req, res) => {
  res.render('staff/show', {
    staff: Staff.getOne(req.params.id),
    title: 'Staff Details'
  });
};


module.exports = {
  index,
  show
};