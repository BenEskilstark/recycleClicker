'use strict';

var _require = require('./burnOrRecycleReducer'),
    burnOrRecycleReducer = _require.burnOrRecycleReducer;

var _require2 = require('./employeeReducer'),
    employeeReducer = _require2.employeeReducer;

var _require3 = require('./tickReducer'),
    tickReducer = _require3.tickReducer;

var _require4 = require('./trashReducer'),
    trashReducer = _require4.trashReducer;

var _require5 = require('./uiReducer'),
    uiReducer = _require5.uiReducer;

var _require6 = require('./tickerReducer'),
    tickerReducer = _require6.tickerReducer;

var _require7 = require('../state/initState'),
    initState = _require7.initState;

var rootReducer = function rootReducer(state, action) {
  if (state === undefined) return initState();

  switch (action.type) {
    case 'START':
      {
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
    case 'PAY_CONTRACTOR':
    case 'PAY_EMPLOYEE':
    case 'NEED_PAY':
    case 'ABOUT_TO_LEAVE':
    case 'QUIT':
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
};

module.exports = { rootReducer: rootReducer };