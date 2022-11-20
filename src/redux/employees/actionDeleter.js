import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const deleteEmployee = employee => dispatch => {
  dispatch(actions.deleteEmployee(employee));
};
