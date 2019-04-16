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
          [action.role]: {
            ...state.employees[action.role],
            cur: state.employees[action.role].cur + 1,
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
  }
  return state;
}

module.exports = {employeeReducer};
