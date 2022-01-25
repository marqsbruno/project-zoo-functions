const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const anim = data.species.find((element) => element.name === animal);
  return anim.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
