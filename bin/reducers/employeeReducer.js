'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = Math.max,
    min = Math.min,
    floor = Math.floor,
    random = Math.random;


var employeeReducer = function employeeReducer(state, action) {
  switch (action.type) {
    case 'HIRE':
      {
        var _extends2;

        var num = action.num;

        var role = state.ui.selectedRole;
        var roleType = state.config.employees.includes(role) ? 'employee' : 'contractor';
        return _extends({}, state, {
          employees: _extends({}, state.employees, (_extends2 = {
            cur: state.employees.cur + num
          }, _defineProperty(_extends2, roleType, _extends({}, state.employees[roleType], {
            cur: state.employees[roleType].cur + num
          })), _defineProperty(_extends2, role, _extends({}, state.employees[role], {
            cur: state.employees[role].cur + num
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
        var _num = action.num;

        var _roleType = random() < 0.5 ? 'contractor' : 'employee';
        var employees = state.employees,
            money = state.money;
        // can't pay if you can't afford the wage

        var wage = employees[_roleType].curWage;
        if (wage > money.cur) {
          return state;
        }
        var payableNum = min(floor(money.cur / wage), _num);

        var aboutToLeave = min(employees[_roleType].aboutToLeave, payableNum);
        var needPay = min(employees[_roleType].needPay - aboutToLeave, payableNum);
        var paidWage = max(aboutToLeave, needPay) * wage;
        return _extends({}, state, {
          money: _extends({}, state.money, {
            cur: money.cur - paidWage
          }),
          employees: _extends({}, state.employees, _defineProperty({}, _roleType, _extends({}, state.employees[_roleType], {
            needPay: employees[_roleType].needPay - needPay,
            aboutToLeave: employees[_roleType].aboutToLeave - aboutToLeave
          })))
        });
      }
    case 'NEED_PAY':
      {
        var _roleType2 = action.roleType,
            _num2 = action.num;
        var _employees = state.employees;

        var byRoleType = _employees[_roleType2];
        var _needPay = min(byRoleType.cur - byRoleType.needPay - byRoleType.aboutToLeave, _num2);
        return _extends({}, state, {
          employees: _extends({}, state.employees, _defineProperty({}, _roleType2, _extends({}, state.employees[_roleType2], {
            needPay: _employees[_roleType2].needPay + _needPay
          })))
        });
      }
    case 'ABOUT_TO_LEAVE':
      {
        var _roleType3 = action.roleType,
            _num3 = action.num;
        var _employees2 = state.employees;

        var _byRoleType = _employees2[_roleType3];
        var _aboutToLeave = min(_byRoleType.needPay, _num3);
        var _needPay2 = _byRoleType.needPay - _aboutToLeave;
        return _extends({}, state, {
          employees: _extends({}, state.employees, _defineProperty({}, _roleType3, _extends({}, _byRoleType, {
            aboutToLeave: _byRoleType.aboutToLeave + _aboutToLeave,
            needPay: _needPay2
          })))
        });
      }
    case 'QUIT':
      {
        var _roleType4 = action.roleType,
            _num4 = action.num;
        var _employees3 = state.employees;

        var _byRoleType2 = _employees3[_roleType4];
        var quit = min(_byRoleType2.aboutToLeave, _num4);
        var _aboutToLeave2 = _byRoleType2.aboutToLeave - quit;
        return _extends({}, state, {
          employees: _extends({
            cur: _employees3.cur - quit
          }, state.employees, _defineProperty({}, _roleType4, _extends({}, _byRoleType2, {
            cur: _byRoleType2.cur - quit,
            quit: _byRoleType2.quit + quit,
            aboutToLeave: _aboutToLeave2
          })))
        });
      }
  }
  return state;
};

module.exports = { employeeReducer: employeeReducer };