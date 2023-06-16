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

const newStaff = (req, res) => {
  res.render('staff/new', {
    title: "New Staff Member"
  });
};

const create = (req, res) => {
  Staff.create(req.body);
  res.redirect('staff');
};


module.exports = {
  index,
  show,
  new: newStaff,
  create
};