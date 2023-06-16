const Pastwork = require('../models/pastwork');

const index = (req, res) => {
  res.render('past-work/index', {
    pastwork: Pastwork.getAll(),
    title: 'Past Work'
  });
};

const show = (req, res) => {
  res.render('past-work/show', {
    pastwork: Pastwork.getOne(req.params.id),
    title: 'Past-Work Details'
  });
};

module.exports = {
  index,
  show
};