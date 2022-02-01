const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  const officeHours = {};
  Object.keys(data.hours).forEach((dia) => {
    officeHours[dia] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`;
  });
  const exhibition = [];
  const a = data.species.filter((spec) => spec.availability.map((dia) => {
    const weekDay = {dia: dia.includes((Object.keys(data.hours)))};
    return weekDay;
  }));
/*   const a = Object.keys(data.hours).filter((dia) =>
    data.species.filter((spec) => dia.includes(spec.availability))); */

    console.log('RESULTADO', a);
  return a;
}
module.exports = getSchedule;
