// @flow

const {burnOrRecycleReducer} = require('./burnOrRecycleReducer');
const {employeeReducer} = require('./employeeReducer');
const {tickReducer} = require('./tickReducer');
const {trashReducer} = require('./trashReducer');
const {uiReducer} = require('./uiReducer');
const {tickerReducer} = require('./tickerReducer');

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
      return tickReducer(state, action);
    case 'ADD_TRASH':
      return trashReducer(state, action);
    case 'BURN':
    case 'RECYCLE':
      return burnOrRecycleReducer(state, action);
    case 'HIRE':
    case 'SET_WAGE':
    case 'PAY':
      return employeeReducer(state, action);
    case 'SELECT_ROLE':
      return uiReducer(state, action);
    case 'RESEARCH':
    case 'LOBBY':
      return state; // TODO
    case 'TICKER':
      return tickerReducer(state, action);
  }
  return state;
});

module.exports = {rootReducer}
