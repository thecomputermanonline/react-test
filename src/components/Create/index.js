import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormDField from "./FormDField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const Create = () => {
  console.log(JSON.parse(localStorage.getItem("data")));
  const history = useHistory();
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
      history.push("/view");
    },
    [dispatch]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          birthDate: "",
          status: "",
          jobTitle: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormField name="birthDate" placeholder="yyyy/mm/dd" />
            <FormField name="jobTitle" placeholder="Job Title" />
            <FormDField name="status" placeholder="Status" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
