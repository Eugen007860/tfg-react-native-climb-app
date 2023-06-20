import { Formik, useField } from "formik";
import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import FormikInputValue from "../components/FormikInputValue";
import GetterButton from "../components/GetterButton";
import { climbingSessionValidationSchema } from "../validationSchemas/climbingSession";

initialValues = {
  handStrenth: "",
  indexFingerStrenth: "",
  middleFingerStrenth: "",
  ringFingerStrenth: "",
};

export default function ClimbingSessionCreator({ navigation, route }) {
  const id = route.params.id;
  return (
    <Formik
      validationSchema={climbingSessionValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => saveClimbingSessionData(id, values, navigation)}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="handStrenth"
              placeholder="Fuerza obtenida en la mano"
              onChangeText={handleChange("handStrenth")}
            />
            <GetterButton name="handStrenth" handleChange />

            <FormikInputValue
              name="indexFingerStrenth"
              placeholder="Fuerza obtenida en el dedo indice"
              onChangeText={handleChange("indexFingerStrenth")}
            />
            <GetterButton name="indexFingerStrenth" />

            <FormikInputValue
              name="middleFingerStrenth"
              placeholder="Fuerza obtenida en el dedo corazon"
              onChangeText={handleChange("middleFingerStrenth")}
            />
            <GetterButton name="middleFingerStrenth" />

            <FormikInputValue
              name="ringFingerStrenth"
              placeholder="Fuerza obtenida en el dedo anular"
              onChangeText={handleChange("ringFingerStrenth")}
            />
            <GetterButton name="ringFingerStrenth" />

            <Button onPress={handleSubmit} title="Guardar session"></Button>
          </View>
        );
      }}
    </Formik>
  );
}

const saveClimbingSessionData = async (id, values, navigation) => {
  await fetch("http://192.168.0.29:3000/climbingSession", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: id,
      hand_strength: values.handStrenth,
      index_strength: values.indexFingerStrenth,
      middle_fingerStregth: values.middleFingerStrenth,
      ring_strength: values.ringFingerStrenth,
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

styles = StyleSheet.create({
  form: {
    marginTop: 10,
    alignSelf: "center",
    flex: 1
  },
  button: {
    marginBottom: 20,
    marginTop: 0,
    backgroundColor: "#24a0ed",
    borderRadius: 10,
    padding: 2,
    alignSelf: "flex-start",
  },
});
