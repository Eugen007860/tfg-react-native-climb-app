import * as yup from "yup";

export const signinValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Write a valid email")
    .required("E-mail is required"),
  password: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "Too Long!")
    .required("Password is required"),
  name: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "Too Long!")
    .required("Name is required"),
  lastname: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "Too Long!")
    .required("Lastname is required"),
  username: yup
    .string()
    .min(5, "Too short!")
    .max(20, "Too Long!")
    .required("Username is required"),
});
