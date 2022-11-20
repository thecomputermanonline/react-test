import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "../Create/FormField";
import FormDField from "../Create/FormDField";
import FormButtons from "../Create/FormButtons";
import formValidationSchema from "../Create/formValidationSchema";
import { saveEmployee } from "../../redux/employees/actionUpdater";

const Update = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      console.log(employee);
      dispatch(saveEmployee(employee));
      history.push("/view");
    },
    [dispatch]
  );

  return (
    <>
      <Header>Update employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          id: localStorage.getItem("id"),
          firstName: localStorage.getItem("firstName"),
          surname: localStorage.getItem("surname"),
          email: localStorage.getItem("email"),
          birthDate: localStorage.getItem("birthDate"),
          status: localStorage.getItem("status"),
          jobTitle: localStorage.getItem("jobTitle"),
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

export default Update;
