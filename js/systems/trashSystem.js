// @flow

const timeInterval = 1500;

const initTrashSystem = (store) => {

  let time = store.getState().time;
  store.subscribe(() => {
    const state = store.getState();
    // only check on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    if (time % timeInterval == 0) {
      store.dispatch({type: 'ADD_TRASH', trash: 200 * (time / timeInterval)});
    }
  });
}

module.exports = {initTrashSystem};
