// @flow

import type {State} from '../types';

const initState = (): State => {
  return {
    time: 0,
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
      cur: 100,
      max: 1000,
    },
    money: {
      cur: 10000,
    },
    ticker: {
      messages: [],
    }
    employees: {
      cur: 0,
      roleOptions: ['Burner', 'Recycler', 'Recruiter', 'Manager', 'Scientist', 'Lawyer'],
      wages: {
        contractor: {
          minWage: 10,
          maxWage: 500,
          curWage: 20,
        },
        employee: {
          minWage: 100,
          maxWage: 1000,
          curWage: 200,
        },
      }
      Burner: {
        cur: 0,
        clickRate: 100,
        action: 'BURN',
      },
      Recycler: {
        cur: 0,
        clickRate: 100,
        action: 'RECYCLE',
      },
      Manager: {
        cur: 0,
        clickRate: 100,
        action: 'PAY',
      },
      Recruiter: {
        cur: 0,
        clickRate: 500,
        action: 'HIRE',
      },
      Scientist: {
        cur: 0,
        clickRate: 100,
        action: 'RESEARCH',
      },
      Lawyer: {
        cur: 0,
        clickRate: 100,
        action: 'LOBBY',
      },
    },
    config: {
      msPerTick: 20,

      trashPerBurn: 1,
      revenuePerBurn: 200,
      trashPerRecycle: 1,
      revenuePerRecycle: 100,

      contractors: ['Recycler', 'Burner'],
      employees: ['Recruiter', 'Manager', 'Scientist', 'Lawyer'],
      allRoles: ['Burner', 'Recycler', 'Recruiter', 'Manager', 'Scientist', 'Lawyer'],
    },
  };
}

module.exports = {initState};
