import React from "react";
import StyledText from "./StyledText";
import StyledTextInput from "./StyledTextInput";
import { StyleSheet } from "react-native";
import { useField } from "formik";

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  [fieldProps, fieldMeta, fieldHelpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={fieldProps.value}
        error={fieldMeta.error}
        {...props}
      />
      {fieldMeta.error && (
        <StyledText style={styles.error}> {fieldMeta.error}</StyledText>
      )}
    </>
  );
};

export default FormikInputValue;
