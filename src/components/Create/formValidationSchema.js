import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  status: yup
    .string()
    .trim()
    .max(100, "The maximum number of characters is 100")
    .required("Required"),
  jobTitle: yup
    .string()
    .trim()
    .max(100, "The maximum number of characters is 100")
    .required("Required"),
  birthDate: yup.date().required("Required"),
});

export default formValidationSchema;
