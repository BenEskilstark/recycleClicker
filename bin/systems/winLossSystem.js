'use strict';

var React = require('React');
var RestartButtonOption = require('../ui/components/RestartButtonOption.react');

var warningsShown = {
  burning25: false,
  burning50: false,
  burning75: false,
  burning90: false,

  trash25: false,
  trash50: false,
  trash75: false,
  trash90: false
};

var initWinLossSystem = function initWinLossSystem(store) {

  var time = store.getState().time;
  var dispatch = store.dispatch;

  store.subscribe(function () {
    var state = store.getState();
    // only check on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    // ----------------------------------------------------------------
    // Too much burning
    // ----------------------------------------------------------------
    var burn = state.burn;

    if (burn.cur >= burn.max * 0.25 && !warningsShown.burning25) {
      warningsShown.burning25 = true;
      dispatch(ticker('Burning too much trash leads to catastrophe'));
    }
    if (burn.cur >= burn.max * 0.50 && !warningsShown.burning50) {
      warningsShown.burning50 = true;
      dispatch(ticker('Amount of trash burned is dangerously high'));
    }
    if (burn.cur >= burn.max * 0.75 && !warningsShown.burning75) {
      warningsShown.burning75 = true;
      dispatch(ticker('Burning trash will soon lead to catastrophe!'));
    }
    if (burn.cur >= burn.max * 0.90 && !warningsShown.burning90) {
      warningsShown.burning90 = true;
      dispatch(ticker('Burning will destroy the world imminently'));
    }

    if (burn.cur >= burn.max && !state.ui.gameOver) {
      dispatch(ticker('You burned so much trash the world collapsed!'));
      dispatch(ticker(React.createElement(RestartButtonOption, {
        win: false,
        dispatch: dispatch
      })));
      dispatch({ type: 'GAME_OVER', win: false });
    }

    // ----------------------------------------------------------------
    // Too much trash
    // ----------------------------------------------------------------
    var trash = state.trash;

    if (trash.cur >= trash.max * 0.25 && !warningsShown.trash25) {
      warningsShown.trash25 = true;
      dispatch(ticker('Collect trash quickly to avoid catastrophe'));
    }
    if (trash.cur >= trash.max * 0.50 && !warningsShown.trash50) {
      warningsShown.trash50 = true;
      dispatch(ticker('The streets overflow with uncollected trash'));
    }
    if (trash.cur >= trash.max * 0.75 && !warningsShown.trash75) {
      warningsShown.trash75 = true;
      dispatch(ticker('Uncollected trash levels are dangerously high'));
    }
    if (trash.cur >= trash.max * 0.90 && !warningsShown.trash90) {
      warningsShown.trash90 = true;
      dispatch(ticker('Trash catastrophe will occur at any moment'));
    }

    if (trash.cur >= trash.max && !state.ui.gameOver) {
      dispatch(ticker('You didn\'t collect trash fast enough to stop collapse'));
      dispatch(ticker(React.createElement(RestartButtonOption, {
        win: false,
        dispatch: dispatch
      })));
      dispatch({ type: 'GAME_OVER', win: false });
    }

    // ----------------------------------------------------------------
    // No trash and no trash rate
    // ----------------------------------------------------------------
    if (trash.cur <= 0 && state.config.trashMultiplier == 0 && !state.ui.gameOver) {
      dispatch(ticker('You collected all the trash!'));
      dispatch(ticker(React.createElement(RestartButtonOption, {
        win: true,
        dispatch: dispatch
      })));
      dispatch({ type: 'GAME_OVER', win: true });
    }
  });
};

var ticker = function ticker(message) {
  return { type: 'TICKER', message: message };
};

module.exports = { initWinLossSystem: initWinLossSystem };