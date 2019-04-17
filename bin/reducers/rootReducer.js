'use strict';

var _require = require('./burnOrRecycleReducer'),
    burnOrRecycleReducer = _require.burnOrRecycleReducer;

var _require2 = require('./employeeReducer'),
    employeeReducer = _require2.employeeReducer;

var _require3 = require('./tickReducer'),
    tickReducer = _require3.tickReducer;

var _require4 = require('./uiReducer'),
    uiReducer = _require4.uiReducer;

var _require5 = require('../state/initState'),
    initState = _require5.initState;

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
};

module.exports = { rootReducer: rootReducer };