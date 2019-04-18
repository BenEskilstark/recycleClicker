'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var trashReducer = function trashReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRASH':
      return _extends({}, state, {
        trash: _extends({}, state.trash, {
          cur: state.trash.cur + action.trash
        })
      });
  }
  return state;
};

module.exports = { trashReducer: trashReducer };