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

const getOne = (id) => {
  id = parseInt(id);
  return staff.find(staff => staff.id === id);
};

const create = (newStaff) => {
  newStaff.id = Date.now() % 1000000;
  staff.push(newStaff);
};

const deleteOne = (id) => {
  id = parseInt(id);
  const idx = staff.findIndex(staff => staff.id === id);
  staff.splice(idx, 1);
}

const update = (id, updatedStaff) => {
  id = parseInt(id);
  const member = staff.find(member => member.id === id);
  Object.assign(member, updatedStaff);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};