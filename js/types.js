// @flow

export type State = {
  ui: {},
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
  employees: {
    cur: number,
  },
  config: {
    trashPerBurn: number,
    revenuePerBurn: number,
    trashPerRecycle: number,
    revenuePerRecycle: number,
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

