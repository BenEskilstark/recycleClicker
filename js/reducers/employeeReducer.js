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
          wages: {
            ...state.employees.wages,
            [action.role]: {
              ...state.employees.wages[action.role],
              curWage: action.wage,
            }
          }
        },
      };
    case 'PAY':
      return {
        ...state,
      };
  }
  return state;
}

module.exports = {employeeReducer};
