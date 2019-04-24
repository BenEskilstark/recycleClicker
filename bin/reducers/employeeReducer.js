'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var employeeReducer = function employeeReducer(state, action) {
  switch (action.type) {
    case 'HIRE':
      return _extends({}, state, {
        employees: _extends({}, state.employees, _defineProperty({
          cur: state.employees.cur + 1
        }, state.ui.selectedRole, _extends({}, state.employees[state.ui.selectedRole], {
          cur: state.employees[state.ui.selectedRole].cur + 1
        })))
      });
    case 'SET_WAGE':
      var contractors = ['Recycler', 'Burner'];
      var employees = ['Recruiter', 'Manager', 'Scientist', 'Lawyer'];
      var nextEmployees = _extends({}, state.employees);
      if (action.role == 'Contractor') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = contractors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var contractorRole = _step.value;

            nextEmployees[contractorRole] = _extends({}, nextEmployees[contractorRole], {
              curWage: action.wage
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = employees[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var employeeRole = _step2.value;

            nextEmployees[employeeRole] = _extends({}, nextEmployees[employeeRole], {
              curWage: action.wage
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      return _extends({}, state, {
        employees: nextEmployees
      });
    case 'PAY':
      return _extends({}, state);
  }
  return state;
};

module.exports = { employeeReducer: employeeReducer };