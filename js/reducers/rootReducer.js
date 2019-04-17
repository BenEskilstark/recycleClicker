// @flow

const {burnOrRecycleReducer} = require('./burnOrRecycleReducer');
const {employeeReducer} = require('./employeeReducer');
const {tickReducer} = require('./tickReducer');
const {uiReducer} = require('./uiReducer');

const {initState} = require('../state/initState');

import type {State, Action} from '../types';

const rootReducer = ((state: State, action: Action): State => {
  if (state === undefined) return initState();

  switch (action.type) {
    case 'START': {
      // const stateCookie = parseInt(localStorage.getItem('state')) || 0;
      return state;
    }
    case 'CLEAR_LOCAL_STORAGE':
      localStorage.clear();
      return state;
    case 'TICK':
      return tickReducer(state);
    case 'BURN':
    case 'RECYCLE':
      return burnOrRecycleReducer(state, action);
    case 'HIRE':
    case 'SET_WAGE':
      return employeeReducer(state, action);
    case 'SELECT_ROLE':
      return uiReducer(state, action);
  }
  return state;
});

module.exports = {rootReducer}
