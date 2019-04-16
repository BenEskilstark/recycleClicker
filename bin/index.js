'use strict';

var _require = require('redux'),
    createStore = _require.createStore;

var Game = require('./ui/Game.react');
var React = require('react');
var ReactDOM = require('react-dom');

var _require2 = require('./reducers/rootReducer.js'),
    rootReducer = _require2.rootReducer;

var store = createStore(rootReducer);
window.store = store; // useful for debugging

store.dispatch({ type: 'START' });

ReactDOM.render(React.createElement(Game, { store: store }), document.getElementById('container'));