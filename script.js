const sites = [
  "cats.com",
  "dogs.com",
  "flowers.com",
  "animals.com",
  "catsphotos.com",
  "cutiestcat.com",
  "homecats.com",
];

const googleSearch = (sites, searchInput) => {
  const matches = sites.filter((item) => item.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
