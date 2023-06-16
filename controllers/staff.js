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
  res.redirect('/staff');
};

const deleteStaff = (req, res) => {
  Staff.deleteOne(req.params.id);
  res.redirect('/staff');
};

const edit = (req, res) => {
  const staff = Staff.getOne(req.params.id);
  res.render('staff/edit', {
    title: 'Edit Staff Member',
    staff
  });
};

const update = (req, res) => {
  Staff.update(req.params.id, req.body);
  res.redirect(`/staff/${req.params.id}`);
}


module.exports = {
  index,
  show,
  new: newStaff,
  create,
  delete: deleteStaff,
  edit,
  update
};