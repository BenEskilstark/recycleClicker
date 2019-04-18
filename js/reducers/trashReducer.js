// @flow

const trashReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRASH':
      return {
        ...state,
        trash: {
          ...state.trash,
          cur: state.trash.cur + action.trash,
        },
      };
  }
  return state;
}

module.exports = {trashReducer};
