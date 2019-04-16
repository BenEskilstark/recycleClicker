// @flow

const {buttonReducer} = require('./buttonReducer');
const {tickReducer} = require('./tickReducer');
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
    case 'ADD_TRASH':
      return {
        ...state,
        trash: {
          ...state.trash,
          cur: state.trash.cur + action.amount,
        },
      }
    case 'BURN':
    case 'RECYCLE':
    case 'HIRE':
      return buttonReducer(state, action);
  }
  return state;
});

module.exports = {rootReducer}
