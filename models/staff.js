const staff = [
  {
    id: 1,
    name: 'Tony Stark',
    position: 'CEO',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/TStark-PromoImage-Jets-IM.jpg',
  },
  {
    id: 2,
    name: 'Pepper Potts',
    position: 'Personal Assistant',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/03/Pepper_Potts_Endgame_Textless.jpg'
  },
  {
    id: 3,
    name: 'Happy Hogan',
    position: 'Head of Security',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/7b/Happy_Hogan_Endgame_Textless.jpg'
  },
  {
    id: 4,
    name: 'James Rhodes',
    position: 'Military Liaison',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Terrence_Howard_and_Don_Cheadle_as_James_Rhodes.jpg'
  }
];

const getAll = () => {
  return staff;
};

module.exports = {
  getAll
};