import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const findEmployee = employee => dispatch => {
  dispatch(actions.findEmployee(employee));
};
