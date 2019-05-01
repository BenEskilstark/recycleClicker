// @flow

const contractorNeedPayInterval = 1500 / 4;
const contractorAboutToLeaveInterval = 1500 / 3;
const contractorQuitInterval = 2500 / 4;

const employeeNeedPayInterval = 5000;
const employeeAboutToLeaveInterval = 1000;
const employeeQuitInterval = 1500;

const initEmployeeNeedPaySystem = (store) => {

  let time = store.getState().time;
  const {dispatch} = store;
  store.subscribe(() => {
    const state = store.getState();
    // only run the system on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    const numContractors = state.employees.contractor.cur;
    const numContrNeedPay = state.employees.contractor.needPay;
    const numContrAboutToLeave = state.employees.contractor.aboutToLeave;
    if (time % contractorNeedPayInterval == 0) {
      dispatch({type: 'NEED_PAY', roleType: 'contractor', num: numContractors});
    }
    if (time % contractorAboutToLeaveInterval == 0) {
      dispatch({type: 'ABOUT_TO_LEAVE', roleType: 'contractor', num: numContrNeedPay});
    }
    if (time % contractorQuitInterval == 0) {
      dispatch({type: 'QUIT', roleType: 'contractor', num: numContrAboutToLeave});
    }

    const numEmployees = state.employees.employee.cur;
    if (time % employeeNeedPayInterval == 0) {
      dispatch({type: 'NEED_PAY', roleType: 'employee', num: numEmployees});
    }
    if (time % employeeAboutToLeaveInterval == 0) {
      dispatch({type: 'ABOUT_TO_LEAVE', roleType: 'employee', num: numEmployees});
    }
    if (time % employeeQuitInterval == 0) {
      dispatch({type: 'QUIT', roleType: 'employee', num: numEmployees});
    }
  });
}

module.exports = {initEmployeeNeedPaySystem};
