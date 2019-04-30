// @flow

import type {State} from '../types';

const employeeReducer = (state: State, action): State => {
  switch (action.type) {
    case 'HIRE': {
      const {num} = action;
      const role = state.ui.selectedRole;
      const roleType = state.employees.includes(role) ? 'employee' : 'contractor';
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
      const {roleType, num} = action;
      const {employees, money} = state;
      // can't pay if you can't afford the wage
      const wage = employees[roleType].curWage;
      if (wage > money.cur) {
        return state;
      }
      const aboutToLeave = employees[roleType].aboutToLeave > 0 ? num : 0;
      const needPay =
        employees[roleType].needPay > 0 && aboutToLeave == 0 ? num : 0;
      return {
        ...state,
        money: {
          ...state.money,
          cur: money.cur - wage,
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
      const needPay =
        employees[roleType].needPay < employees[roleType].cur ? num : 0;
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
      const aboutToLeave = employees[roleType].needPay > 0 ? num : 0;
      const needPay = employees[roleType].needPay - aboutToLeave;
      return {
        ...state,
        employees: {
          ...state.employees,
          [roleType]: {
            ...state.employees[roleType],
            aboutToLeave: employees[roleType].aboutToLeave + aboutToLeave,
            needPay,
          }
        },
      };
    }
    case 'QUIT': {
      const {roleType, num} = action;
      const {employees} = state;
      const quit = employees[roleType].aboutToLeave > 0 ? num : 0;
      const aboutToLeave = employees[roleType].aboutToLeave - quit;
      return {
        ...state,
        employees: {
          ...state.employees,
          [roleType]: {
            ...state.employees[roleType],
            quit: employees[roleType].quit + quit,
            aboutToLeave,
          }
        },
      };
    }
  }
  return state;
}

module.exports = {employeeReducer};
