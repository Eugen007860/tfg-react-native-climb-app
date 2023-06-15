import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Write a valid email")
    .required("E-mail is required"),
  password: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "Too Long!")
    .required("Password is required"),
});
