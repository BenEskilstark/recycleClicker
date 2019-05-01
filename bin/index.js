'use strict';

var _require = require('redux'),
    createStore = _require.createStore;

var Game = require('./ui/Game.react');
var React = require('react');
var ReactDOM = require('react-dom');

var _require2 = require('./reducers/rootReducer'),
    rootReducer = _require2.rootReducer;

var _require3 = require('./systems/employeeClickSystem'),
    initEmployeeClickSystem = _require3.initEmployeeClickSystem;

var _require4 = require('./systems/trashSystem'),
    initTrashSystem = _require4.initTrashSystem;

var _require5 = require('./systems/employeeNeedPaySystem'),
    initEmployeeNeedPaySystem = _require5.initEmployeeNeedPaySystem;

var store = createStore(rootReducer);
window.store = store; // useful for debugging

store.dispatch({ type: 'START' });

// set up systems
initEmployeeClickSystem(store);
initTrashSystem(store);
initEmployeeNeedPaySystem(store);

var interval = setInterval(function () {
  return store.dispatch({ type: 'TICK' });
}, store.getState().config.msPerTick);

ReactDOM.render(React.createElement(Game, { store: store }), document.getElementById('container'));