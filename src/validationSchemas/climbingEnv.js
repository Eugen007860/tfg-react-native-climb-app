import * as yup from "yup";

export const climbingEnvValidationSchema = yup.object().shape({
  temperature: yup
    .number("Number required")
    .required("Temperature is required"),
  humidity: yup
    .number("Humidty required")
    .required("Humidty is required")
});
