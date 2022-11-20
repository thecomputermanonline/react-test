import React from "react";
import { Field, useFormikContext } from "formik";

import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const FormDField = ({ name }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {() => (
          <Field as="select" name="status" className="field-status">
            <option>choose</option>
            <option value="ACTIVE">Active</option>
            <option value="LEAVE_OF_ABSENCE">On Leave</option>
            <option value="TERMINATED">Terminated</option>
          </Field>
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormDField;
