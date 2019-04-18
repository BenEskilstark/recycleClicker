// @flow

import type {State} from '../types';

const employeeReducer = (state: State, action): State => {
  switch (action.type) {
    case 'HIRE':
      return {
        ...state,
        employees: {
          ...state.employees,
          cur: state.employees.cur + 1,
          [state.ui.selectedRole]: {
            ...state.employees[state.ui.selectedRole],
            cur: state.employees[state.ui.selectedRole].cur + 1,
          },
        },
      };
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
    case 'PAY':
      return {

      };
  }
  return state;
}

module.exports = {employeeReducer};
