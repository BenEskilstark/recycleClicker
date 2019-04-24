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
      const contractors = ['Recycler', 'Burner'];
      const employees = ['Recruiter', 'Manager', 'Scientist', 'Lawyer'];
      const nextEmployees = {...state.employees};
      if (action.role == 'Contractor') {
        for (const contractorRole of contractors) {
          nextEmployees[contractorRole] = {
            ...nextEmployees[contractorRole],
            curWage: action.wage,
          }
        }
      } else {
        for (const employeeRole of employees) {
          nextEmployees[employeeRole] = {
            ...nextEmployees[employeeRole],
            curWage: action.wage,
          }
        }
      }
      return {
        ...state,
        employees: nextEmployees,
      };
    case 'PAY':
      return {
        ...state,
      };
  }
  return state;
}

module.exports = {employeeReducer};
