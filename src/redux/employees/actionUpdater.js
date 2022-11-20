import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveEmployee = employee => dispatch => {
  dispatch(actions.saveEmployee(employee));
};
