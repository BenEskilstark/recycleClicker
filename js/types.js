// @flow

export type State = {
  time: number,
  ui: {
    selectedRole: Role, // selected role for next hire
  },
  trash: {
    cur: number,
    max: number,
  },
  money: {
    cur: number,
  },
  burn: {
    cur: number,
    max: number,
  },
  recycle: {
    cur: number,
    max: number,
  },
  ticker: {
    messages: Array<string>,
  },
  employees: {
    cur: number,
    roleOptions: Array<Role>,
    wages: {
      contractor: {
        minWage: number,
        maxWage: number,
        curWage: number,
      },
      employee: {
        minWage: number,
        maxWage: number,
        curWage: number,
      },
    },
    [role: Role]: {
      cur: number,
      clickRate: number,
      action: string,
    }
  },
  config: {
    msPerTick: number,

    trashPerBurn: number,
    revenuePerBurn: number,
    trashPerRecycle: number,
    revenuePerRecycle: number,
    contractors: Array<Role>,
    employees: Array<Role>,
  },
};

export type Role =
  'Burner' |
  'Recycler' |
  'Manager' |
  'Scientist' |
  'Lawyer';

export type Action =
  {type: 'START'} |
  {type: 'CLEAR_LOCAL_STORAGE'} |
  {type: 'TICK'} |
  {type: 'ADD_TRASH', amount: number} |
  {type: 'BURN'} |
  {type: 'RECYCLE'} |
  {type: 'HIRE', role: Role};
