// @flow

import type {State} from '../types';

const tickReducer = (state: State): State => {
  const nextState = {...state};
  nextState.time = state.time + 1;

  if (nextState.employees.contractor.timeToLeave > 0) {
    nextState.employees.contractor.timeToLeave -= 1;
  }

  if (nextState.employees.employee.timeToLeave > 0) {
    nextState.employees.employee.timeToLeave -= 1;
  }

  return nextState;
}

module.exports = {tickReducer};
