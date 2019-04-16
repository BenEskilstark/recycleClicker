// @flow

import type {State} from '../types';

const initState = (): State => {
  return {
    ui: {},
    burn: {
      cur: 0,
      max: 1000,
    },
    recycle: {
      cur: 0,
      max: Infinity,
    },
    trash: {
      cur: 100,
      max: 1000,
    },
    money: {
      cur: 100,
    },
    employees: {
      cur: 1,
    },
    config: {
      trashPerBurn: 1,
      revenuePerBurn: 2,
      trashPerRecycle: 1,
      revenuePerRecycle: 1,
    },
  };
}

module.exports = {initState};
