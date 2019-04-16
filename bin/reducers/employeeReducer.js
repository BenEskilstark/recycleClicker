'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var employeeReducer = function employeeReducer(state, action) {
  switch (action.type) {
    case 'HIRE':
      return _extends({}, state, {
        employees: _extends({}, state.employees, _defineProperty({
          cur: state.employees.cur + 1
        }, action.role, _extends({}, state.employees[action.role], {
          cur: state.employees[action.role].cur + 1
        })))
      });
    case 'SET_WAGE':
      return _extends({}, state, {
        employees: _extends({}, state.employees, _defineProperty({}, action.role, _extends({}, state.employees[action.role], {
          curWage: action.wage
        })))
      });
  }
  return state;
};

module.exports = { employeeReducer: employeeReducer };