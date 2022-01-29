const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      count.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      count.adult += 1;
    } else { count.senior += 1; }
  });
  return count;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const values = [];
  values.push(child * 20.99);
  values.push(adult * 49.99);
  values.push(senior * 24.99);
  const fullValue = values[0] + values[1] + values[2];
  return fullValue;
}

module.exports = { calculateEntry, countEntrants };
