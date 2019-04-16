// @flow

import type {State} from '../types';

const initState = (): State => {
  return {
    ui: {
      selectedRole: 'Burner',
    },
    burn: {
      cur: 0,
      max: 1000,
    },
    recycle: {
      cur: 0,
      max: Infinity,
    },
    trash: {
      cur: 1000,
      max: 1000,
    },
    money: {
      cur: 10000,
    },
    employees: {
      cur: 0,
      roleOptions: ['Burner', 'Recycler', 'Manager', 'Scientist', 'Lawyer'],
      Burner: {
        minWage: 10,
        maxWage: 500,
        curWage: 20,
        cur: 0,
      },
      Recycler: {
        minWage: 10,
        maxWage: 500,
        curWage: 20,
        cur: 0,
      },
      Manager: {
        minWage: 100,
        maxWage: 1000,
        curWage: 200,
        cur: 0,
      },
    },
    config: {
      trashPerBurn: 1,
      revenuePerBurn: 200,
      trashPerRecycle: 1,
      revenuePerRecycle: 100,
    },
  };
}

module.exports = {initState};
