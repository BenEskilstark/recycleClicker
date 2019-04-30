'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var employeeReducer = function employeeReducer(state, action) {
  switch (action.type) {
    case 'HIRE':
      {
        var _extends2;

        var _num = action.num;

        var role = state.ui.selectedRole;
        var roleType = state.employees.includes(role) ? 'employee' : 'contractor';
        return _extends({}, state, {
          employees: _extends({}, state.employees, (_extends2 = {
            cur: state.employees.cur + _num
          }, _defineProperty(_extends2, roleType, _extends({}, state.employees[roleType], {
            cur: state.employees[roleType].cur + _num
          })), _defineProperty(_extends2, role, _extends({}, state.employees[role], {
            cur: state.employees[role].cur + _num
          })), _extends2))
        });
      }
    case 'SET_WAGE':
      return _extends({}, state, {
        employees: _extends({}, state.employees, _defineProperty({}, action.role, _extends({}, state.employees[action.role], {
          curWage: action.wage
        })))
      });
    case 'PAY':
      {
        var _roleType = action.roleType,
            _num2 = action.num;
        var _state = undefined.state,
            employees = _state.employees,
            money = _state.money;
        // can't pay if you can't afford the wage

        var wage = employees[_roleType].curWage;
        if (wage > money.cur) {
          return state;
        }
        var aboutToLeave = employees[_roleType].aboutToLeave > 0 ? _num2 : 0;
        var needPay = employees[_roleType].needPay > 0 && aboutToLeave == 0 ? _num2 : 0;
        return _extends({}, state, {
          money: _extends({}, state.money, {
            cur: money.cur - wage
          }),
          employees: _extends({}, state.employees, _defineProperty({}, _roleType, _extends({}, state.employees[_roleType], {
            needPay: employees[_roleType].needPay - needPay,
            aboutToLeave: employees[_roleType].aboutToLeave - aboutToLeave
          })))
        });
      }
    case 'NEED_PAY':
      {
        var _roleType2 = action.roleType;
        var _employees = undefined.state.employees;

        var _needPay = _employees[_roleType2].needPay < _employees[_roleType2].cur ? num : 0;
        return _extends({}, state, {
          employees: _extends({}, state.employees, _defineProperty({}, _roleType2, _extends({}, state.employees[_roleType2], {
            needPay: _employees[_roleType2].needPay + _needPay
          })))
        });
      }
    case 'ABOUT_TO_LEAVE':
      {
        var _roleType3 = action.roleType;
        var _employees2 = undefined.state.employees;

        var _aboutToLeave = _employees2[_roleType3].needPay > 0 ? num : 0;
        var _needPay2 = _employees2[_roleType3].needPay - _aboutToLeave;
        return _extends({}, state, {
          employees: _extends({}, state.employees, _defineProperty({}, _roleType3, _extends({}, state.employees[_roleType3], {
            aboutToLeave: _employees2[_roleType3].aboutToLeave + _aboutToLeave,
            needPay: _needPay2
          })))
        });
      }
    case 'QUIT':
      {
        var _roleType4 = action.roleType,
            _num3 = action.num;
        var _employees3 = undefined.state.employees;

        var quit = _employees3[_roleType4].aboutToLeave > 0 ? _num3 : 0;
        var _aboutToLeave2 = _employees3[_roleType4].aboutToLeave - quit;
        return _extends({}, state, {
          employees: _extends({}, state.employees, _defineProperty({}, _roleType4, _extends({}, state.employees[_roleType4], {
            quit: _employees3[_roleType4].quit + quit,
            aboutToLeave: _aboutToLeave2
          })))
        });
      }
  }
  return state;
};

module.exports = { employeeReducer: employeeReducer };