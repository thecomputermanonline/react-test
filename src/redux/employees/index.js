import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = [
          ...draftState.employees_records,
          action.payload,
        ];
      },
    },
    // saveEmployee: {
    //   prepare: employee => ({
    //     payload: { ...employee },
    //   }),
    //   reducer(draftState, action) {
    //     const i = draftState.employees_records.findIndex(
    //       e => e.id === action.payload.id
    //     );
    //     const empsrec = [...draftState.employees_records];
    //     empsrec.splice(i, 1, action.payload);
    //     draftState.employees_records = empsrec;
    //   },
    // },
    saveEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),

      reducer(draftState, action) {
        const employeesRecords = [...draftState.employees_records];
        draftState.employees_records = draftState.employees_records.findIndex(
          employee => employee.id === action.payload.id
        );
        employeesRecords.splice(
          draftState.employees_records,
          1,
          action.payload
        );
        draftState.employees_records = employeesRecords;
      },
    },
    deleteEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: employee },
      }),
      reducer(draftState, action) {
        draftState.employees_records = draftState.employees_records.filter(
          employee => employee.id !== action.payload.id
        );
      },
    },
    findEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),
      reducer(draftState, action) {
        draftState.employees_records = draftState.employees_records.find(
          employee => employee.id === action.payload.id
        );
      },
    },
  },
});

export const { saveNewEmployee, saveEmployee, deleteEmployee, findEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
