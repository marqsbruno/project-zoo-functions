const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  if (data.employees.find((element) => element.firstName === employeeName)) {
    return data.employees.find((element) => element.firstName === employeeName);
  }
  if (data.employees.find((element) => element.lastName === employeeName)) {
    return data.employees.find((element) => element.lastName === employeeName);
  }
}
module.exports = getEmployeeByName;
