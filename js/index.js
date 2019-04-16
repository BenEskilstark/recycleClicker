// @flow

const {createStore} = require('redux');
const Game = require('./ui/Game.react');
const React = require('react');
const ReactDOM = require('react-dom');
const {rootReducer} = require('./reducers/rootReducer.js');

const store = createStore(rootReducer);
window.store = store; // useful for debugging

store.dispatch({type: 'START'});

ReactDOM.render(
  <Game store={store} />,
  document.getElementById('container'),
);

