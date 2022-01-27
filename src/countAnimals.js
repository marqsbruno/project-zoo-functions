const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// buscar.

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsList = {};
    species.forEach((element) => {
      animalsList[element.name] = element.residents.length;
    });
    return animalsList;
  }
  if (!animal.sex) {
    const animalsObj = species.find((element) => element.name === animal.specie).residents.length;
    return animalsObj;
  }
  const animalObj2 = species.find((element) => element.name === animal.specie);
  const animalCount = animalObj2.residents.filter((element) => element.sex === animal.sex);
  return animalCount.length;
}
module.exports = countAnimals;
