import React from "react";
import { Formik } from "formik";
import { signinValidationSchema } from "../validationSchemas/signin";
import FormikInputValue from "../components/FormikInputValue";
import { Button, StyleSheet, View} from "react-native";

const initialValues = {
  email: "",
  password: "",
  name: "",
  lastname: "",
  username: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export default function SignIn() {
  return (
    <Formik
      validationSchema={signinValidationSchema}
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
              placeholder="Contraseña"
              onChangeText={handleChange("password")}
            />

            <FormikInputValue
              name="name"
              placeholder="Nombre"
              onChangeText={handleChange("name")}
            />

            <FormikInputValue
              name="lastname"
              placeholder="Apellido"
              onChangeText={handleChange("lastname")}
            />

            <FormikInputValue
              name="username"
              placeholder="Nombre de usuario"
              onChangeText={handleChange("username")}
            />

            <Button onPress={handleSubmit} title="Sign in"></Button>
          </View>
        );
      }}
    </Formik>
  );
}
