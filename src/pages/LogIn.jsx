import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import FormikInputValue from "../components/FormikInputValue";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },

  signInRedirection: {
    marginTop: 5,
  },
});

export default function LogIn({navigation}) {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="email"
              placeholder="E-mail"
              onChangeText={handleChange("email")}
            />
            <FormikInputValue
              name="password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In"></Button>
            <Button
              title="Sign in"
              onPress={() => navigation.navigate("Sign in")}
            />
          </View>
        );
      }}
    </Formik>
  );
}
