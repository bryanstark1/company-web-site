const links = [
  {
    id: 1,
    location: 'New York City',
    link: 'https://marvelcinematicuniverse.fandom.com/wiki/Avengers_Tower'
  },
  {
    id: 2,
    location: 'New York City (Defunct)',
    link: 'https://marvelcinematicuniverse.fandom.com/wiki/Stark_Industries_New_York_Facility'
  },
  {
    id: 3,
    location: 'Los Angeles',
    link: 'https://marvelcinematicuniverse.fandom.com/wiki/Stark_Industries_Headquarters'
  }
];

const getAll = () => {
  return links;
};

module.exports = {
  getAll
}