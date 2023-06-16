const Links = require('../models/link');

const index = (req, res) => {
  res.render('links/index', {
    link: Links.getAll(),
    title: 'Links'
  });
};

module.exports = {
  index
};