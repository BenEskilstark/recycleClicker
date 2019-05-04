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
    },
    employees: {
      cur: 0,
      roleOptions: [
        'Burner', 'Recycler', 'Foreman', 'Recruiter', 'Manager', 'Scientist', 'Lawyer',
      ],
      contractor: {
        cur: 0,
        wage: 2000,
        dontNeedPay: 0,
        needPay: 0,
        aboutToLeave: 0,
        quit: 0,
      },
      employee: {
        cur: 0,
        wage: 20000,
        dontNeedPay: 0,
        needPay: 0,
        aboutToLeave: 0,
        quit: 0,
      },
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
      Foreman: {
        cur: 0,
        clickRate: 100,
        action: 'PAY_CONTRACTOR',
      },
      Manager: {
        cur: 0,
        clickRate: 100,
        action: 'PAY_EMPLOYEE',
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
      employees: ['Recruiter', 'Foreman', 'Manager', 'Scientist', 'Lawyer'],
      allRoles: [
        'Burner', 'Recycler', 'Foreman', 'Recruiter', 'Manager', 'Scientist', 'Lawyer',
      ],
    },
  };
}

module.exports = {initState};
