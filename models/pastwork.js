const pastwork = [
  {
    id: 1,
    suit: 'Mark I',
    location: 'Cave',
    feature: 'Flamethrower',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fb/Iron_Man_Armor_-_Mark_I.png'
  },
  {
    id: 2,
    suit: 'Mark III',
    location: 'Qatar',
    feature: 'On-Board Weapons System',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/47/Iron_Man_Armor_-_Mark_III.png'
  },
  {
    id: 3,
    suit: 'Mark XLIV',
    location: 'Johannesburg',
    feature: 'Hulk Fighting Capabilities',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0b/Iron_Man_Armor_-_Mark_XLIV.png'
  },
  {
    id: 4,
    suit: 'Mark L',
    location: 'New York',
    feature: 'Nano-Technology',
    image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a0/Iron_Man_Armor_-_Mark_L.png'
  }
];

const getAll = () => {
  return pastwork;
};

const getOne = (id) => {
  id = parseInt(id);
  return pastwork.find(pastwork => pastwork.id === id);
};

const create = (newPastwork) => {
  newPastwork.id = Date.now() % 100000;
  pastwork.push(newPastwork);
};

module.exports = {
  getAll,
  getOne,
  create
};