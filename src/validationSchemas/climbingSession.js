import * as yup from "yup";

export const climbingSessionValidationSchema = yup.object().shape({
  handStrenth: yup
    .number("Number required")
    .required("Hand strength is required"),
  indexFingerStrenth: yup
    .number("Number required")
    .required("Index finger strength is required"),
  middleFingerStrenth: yup
    .number("Number required")
    .required("Middle finger strength is required"),
  ringFingerStrenth: yup
    .number("Number required")
    .required("Ring finger strength is required"),
});
