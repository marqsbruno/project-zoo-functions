const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function fullSchedule() {
  const totalHours = {};
  Object.keys(data.hours).forEach((dia) => {
    if (dia === 'Monday') {
      totalHours[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      const name1 = species.filter((elem) => elem.availability.includes(dia));
      const name2 = name1.map((spec) => spec.name);
      totalHours[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: name2,
      };
    }
  });
  return totalHours;
}

function getSchedule(scheduleTarget) {
  const weekDay = Object.keys(data.hours).includes(scheduleTarget);
  const animal = species.some((element) => element.name === scheduleTarget);
  if (weekDay) {
    return { [scheduleTarget]: fullSchedule()[scheduleTarget] };
  }
  if (animal) {
    return species.find((elem) => elem.name === scheduleTarget).availability;
  }
  return fullSchedule();
}

module.exports = getSchedule;
