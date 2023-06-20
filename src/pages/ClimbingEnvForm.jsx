import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import FormikInputValue from "../components/FormikInputValue";
import GetterButton from "../components/GetterButton";
import { climbingEnvValidationSchema } from "../validationSchemas/climbingEnv";


const initialValues = {
  temperature: "",
  humidity: "",
  location: "",
};

export default function ClimbingEnvForm({ route, navigation}) {
  const id = route.params.id;
  return (
    <Formik
      validationSchema={climbingEnvValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => saveClimbingEnvData(id, values, navigation)}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="temperature"
              placeholder="Ingrese la temperatura (ºC) "
              onChangeText={handleChange("temperature")}
            />
            <GetterButton name="temperature" handleChange />

            <FormikInputValue
              name="humidity"
              placeholder="Ingrese el porcetaje de humedad"
              onChangeText={handleChange("humidity")}
            />
            <GetterButton name="humidity" />

            <FormikInputValue
              name="location"
              placeholder="Ingrese las coordenadas de la localizacion"
              onChangeText={handleChange("location")}
            />
            <GetterButton name="location" />

            <Button onPress={handleSubmit} title="Guardar datos"></Button>
          </View>
        );
      }}
    </Formik>
  );
}


const saveClimbingEnvData = async (id, values, navigation) => {
    await fetch("http://192.168.0.29:3000/climbingEnv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: id,
        temperature: values.temperature,
        humidity: values.humidity,
        location: values.location,
        strengthGraph: ""
      }),
    })
      .then(() => {
        navigation.navigate("Climb Session", {
          id: id,
        });
      })
      .catch(function (res) {
        console.log(res);
      });
  };
