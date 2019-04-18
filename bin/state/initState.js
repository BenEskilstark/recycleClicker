'use strict';

var initState = function initState() {
  return {
    time: 0,
    ui: {
      selectedRole: 'Burner'
    },
    burn: {
      cur: 0,
      max: 1000
    },
    recycle: {
      cur: 0,
      max: Infinity
    },
    trash: {
      cur: 100,
      max: 1000
    },
    money: {
      cur: 10000
    },
    employees: {
      cur: 0,
      roleOptions: ['Burner', 'Recycler', 'Recruiter', 'Manager', 'Scientist', 'Lawyer'],
      Burner: {
        minWage: 10,
        maxWage: 500,
        curWage: 20,
        cur: 0,
        clickRate: 100,
        action: 'BURN'
      },
      Recycler: {
        minWage: 10,
        maxWage: 500,
        curWage: 20,
        cur: 0,
        clickRate: 100,
        action: 'RECYCLE'
      },
      Manager: {
        minWage: 100,
        maxWage: 1000,
        curWage: 200,
        cur: 0,
        clickRate: 100,
        action: 'PAY'
      },
      Recruiter: {
        minWage: 100,
        maxWage: 1000,
        curWage: 200,
        cur: 0,
        clickRate: 500,
        action: 'HIRE'
      },
      Scientist: {
        minWage: 100,
        maxWage: 1000,
        curWage: 200,
        cur: 0,
        clickRate: 100,
        action: 'RESEARCH'
      },
      Lawyer: {
        minWage: 100,
        maxWage: 1000,
        curWage: 200,
        cur: 0,
        clickRate: 100,
        action: 'LOBBY'
      }
    },
    config: {
      msPerTick: 20,

      trashPerBurn: 1,
      revenuePerBurn: 200,
      trashPerRecycle: 1,
      revenuePerRecycle: 100
    }
  };
};

module.exports = { initState: initState };