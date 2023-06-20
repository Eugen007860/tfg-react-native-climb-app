import * as yup from "yup";

export const climbingSessionValidationSchema = yup.object().shape({
  handStrenth: yup
    .number()
    .required("Hand strength is required"),
  indexFingerStrenth: yup
    .number()
    .required("Index finger strength is required"),
  middleFingerStrenth: yup
    .number()
    .required("Middle finger strength is required"),
  ringFingerStrenth: yup
    .number()
    .required("Ring finger strength is required"),
});
