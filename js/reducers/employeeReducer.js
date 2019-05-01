// @flow

import type {State} from '../types';
const {max, min, floor, random} = Math;

const employeeReducer = (state: State, action): State => {
  switch (action.type) {
    case 'HIRE': {
      const {num} = action;
      const role = state.ui.selectedRole;
      const roleType = state.config.employees.includes(role) ? 'employee' : 'contractor';
      return {
        ...state,
        employees: {
          ...state.employees,
          cur: state.employees.cur + num,
          [roleType]: {
            ...state.employees[roleType],
            cur: state.employees[roleType].cur + num,
          },
          [role]: {
            ...state.employees[role],
            cur: state.employees[role].cur + num,
          },
        },
      };
    }
    case 'SET_WAGE':
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.role]: {
            ...state.employees[action.role],
            curWage: action.wage,
          }
        },
      };
    case 'PAY': {
      const {num} = action;
      const roleType = random() < 0.5 ? 'contractor' : 'employee';
      const {employees, money} = state;
      // can't pay if you can't afford the wage
      const wage = employees[roleType].curWage;
      if (wage > money.cur) {
        return state;
      }
      const payableNum = min(floor(money.cur / wage), num);

      const aboutToLeave = min(employees[roleType].aboutToLeave, payableNum);
      const needPay = min(employees[roleType].needPay - aboutToLeave, payableNum);
      const paidWage = max(aboutToLeave, needPay) * wage;
      return {
        ...state,
        money: {
          ...state.money,
          cur: money.cur - paidWage,
        },
        employees: {
          ...state.employees,
          [roleType]: {
            ...state.employees[roleType],
            needPay: employees[roleType].needPay - needPay,
            aboutToLeave: employees[roleType].aboutToLeave - aboutToLeave,
          }
        },
      };
    }
    case 'NEED_PAY': {
      const {roleType, num} = action;
      const {employees} = state;
      const byRoleType = employees[roleType];
      const needPay =
        min(byRoleType.cur - byRoleType.needPay - byRoleType.aboutToLeave, num);
      return {
        ...state,
        employees: {
          ...state.employees,
          [roleType]: {
            ...state.employees[roleType],
            needPay: employees[roleType].needPay + needPay,
          }
        },
      };
    }
    case 'ABOUT_TO_LEAVE': {
      const {roleType, num} = action;
      const {employees} = state;
      const byRoleType = employees[roleType];
      const aboutToLeave = min(byRoleType.needPay, num);
      const needPay = byRoleType.needPay - aboutToLeave;
      return {
        ...state,
        employees: {
          ...state.employees,
          [roleType]: {
            ...byRoleType,
            aboutToLeave: byRoleType.aboutToLeave + aboutToLeave,
            needPay,
          }
        },
      };
    }
    case 'QUIT': {
      const {roleType, num} = action;
      const {employees} = state;
      const byRoleType = employees[roleType];
      const quit = min(byRoleType.aboutToLeave, num);
      const aboutToLeave = byRoleType.aboutToLeave - quit;
      return {
        ...state,
        employees: {
          cur: employees.cur - quit,
          ...state.employees,
          [roleType]: {
            ...byRoleType,
            cur: byRoleType.cur - quit,
            quit: byRoleType.quit + quit,
            aboutToLeave,
          }
        },
      };
    }
  }
  return state;
}

module.exports = {employeeReducer};
