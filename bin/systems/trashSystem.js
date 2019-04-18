'use strict';

var timeInterval = 1500;

var initTrashSystem = function initTrashSystem(store) {

  var time = store.getState().time;
  store.subscribe(function () {
    var state = store.getState();
    // only check on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    if (time % timeInterval == 0) {
      store.dispatch({ type: 'ADD_TRASH', trash: 200 * (time / timeInterval) });
    }
  });
};

module.exports = { initTrashSystem: initTrashSystem };