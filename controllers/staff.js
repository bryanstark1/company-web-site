const Staff = require('../models/staff');

const index = (req, res) => {
  res.render('staff/index', {
    staff: Staff.getAll(),
    title: 'Staff'
  });
};

module.exports = {
  index
};