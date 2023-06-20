import * as yup from "yup";

export const climbingItemValidationSchema = yup.object().shape({
  description: yup
    .string()
    .required("Description is required"),
  image: yup
    .string()
    .required("Image Link is required"),
});
