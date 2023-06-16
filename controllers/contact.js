const Contact = require('../models/contact');

const index = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
};

const newContact = (req, res) => {
  res.render('contact');
};

const create = (req, res) => {
  Contact.create(req.body);
  console.log(Contact.getAll())
  res.redirect('/contact')
};

module.exports = {
  index,
  new: newContact,
  create
};