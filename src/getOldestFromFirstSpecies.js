const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(ids) {
  const func = data.employees.find(({ id }) => id === ids);
  const animalFunc = func.responsibleFor[0];
  const animObj = data.species.find(({ id }) => id === animalFunc);
  let result = animObj.residents[0];
  animObj.residents.forEach((element) => {
    if (result.age < element.age) result = element;
  });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
