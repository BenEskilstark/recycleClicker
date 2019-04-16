'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require('./buttonReducer'),
    buttonReducer = _require.buttonReducer;

var _require2 = require('./tickReducer'),
    tickReducer = _require2.tickReducer;

var _require3 = require('../state/initState'),
    initState = _require3.initState;

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
    case 'ADD_TRASH':
      return _extends({}, state, {
        trash: _extends({}, state.trash, {
          cur: state.trash.cur + action.amount
        })
      });
    case 'BURN':
    case 'RECYCLE':
    case 'HIRE':
      return buttonReducer(state, action);
  }
  return state;
};

module.exports = { rootReducer: rootReducer };