// @flow

const {createStore} = require('redux');
const Game = require('./ui/Game.react');
const React = require('react');
const ReactDOM = require('react-dom');
const {rootReducer} = require('./reducers/rootReducer');

const {initEmployeeClickSystem} = require('./systems/employeeClickSystem');
const {initTrashSystem} = require('./systems/trashSystem');
const {initEmployeeNeedPaySystem} = require('./systems/employeeNeedPaySystem');

const store = createStore(rootReducer);
window.store = store; // useful for debugging

store.dispatch({type: 'START'});

// set up systems
initEmployeeClickSystem(store);
initTrashSystem(store);
initEmployeeNeedPaySystem(store);

const interval = setInterval(
  () => store.dispatch({type: 'TICK'}),
  store.getState().config.msPerTick,
);

ReactDOM.render(
  <Game store={store} />,
  document.getElementById('container'),
);
