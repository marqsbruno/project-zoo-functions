const data = require('../data/zoo_data');

//  feito com ajuda de Danilo nas monitorias técnicas.

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((animalID) => {
    array.push(data.species.find((element) => element.id === animalID));
  });
  return array;
}

module.exports = getSpeciesByIds;
