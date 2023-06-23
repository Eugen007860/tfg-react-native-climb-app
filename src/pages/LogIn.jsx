import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import FormikInputValue from "../components/FormikInputValue";
import UserErrorPopUp from "../components/UserErrorPopUp";

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

  redirectLink: {
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default function LogIn({ navigation }) {
  const [userError, setUserError] = useState(false);

  return (
    <View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => getUser(values, navigation, setUserError)}
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
              <Pressable
                style={{ marginTop: 10 }}
                onPress={() => navigation.navigate("Sign in")}
              >
                <Text style={styles.redirectLink}>
                  ¿Todavía no tienes una cuenta?
                </Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
      {userError && (
        <UserErrorPopUp
          errorHandler={() => {
            setUserError(false);
          }}
        />
      )}
    </View>
  );
}

const getUser = async (values, navigation, setUserError) => {
  const response = await fetch("http://192.168.0.29:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  });
  const jsonData = await response.json();
  if (jsonData.length > 0) navigation.navigate("Home", { logged: true });
  else setUserError(true);
};

