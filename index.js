// helpers.js

// Make employee available to the tests
var employee = {};
global.employee = employee;

// Make functions available to the tests
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// expose them globally so Mocha can see them
global.updateEmployeeWithKeyAndValue = updateEmployeeWithKeyAndValue;
global.destructivelyUpdateEmployeeWithKeyAndValue = destructivelyUpdateEmployeeWithKeyAndValue;
global.deleteFromEmployeeByKey = deleteFromEmployeeByKey;
global.destructivelyDeleteFromEmployeeByKey = destructivelyDeleteFromEmployeeByKey;
