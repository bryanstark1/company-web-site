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

const newPastwork = (req, res) => {
  res.render('past-work/new', {
    title: 'New Past Work'
  });
};

const create = (req, res) => {
  Pastwork.create(req.body);
  res.redirect('/past-work');
};

const edit = (req, res) => {
  const pastwork = Pastwork.getOne(req.params.id);
  res.render('past-work/edit', {
    title: "Edit Past Work",
    pastwork
  });
};

const update = (req, res) => {
  Pastwork.update(req.params.id, req.body);
  res.redirect(`/past-work/${req.params.id}`);
};


module.exports = {
  index,
  show,
  new: newPastwork,
  create,
  edit,
  update
};