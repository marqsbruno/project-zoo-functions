const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ideia de usar o .some e o .includes da monitoria em grupo.

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

// falta arrumar linha
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const idsName = data.employees.filter((element) => element.managers.includes(managerId));
    return idsName.map((nameEmployee) => `${nameEmployee.firstName} ${nameEmployee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
