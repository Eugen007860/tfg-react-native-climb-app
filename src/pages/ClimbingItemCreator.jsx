import React from "react";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue";
import { climbingItemValidationSchema } from "../validationSchemas/climbingItem";

export default function ClimbingItemCreator({ navigation, route }) {
  const fullDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const [date, hour] = fullDate.split(" ");
  const user_id = route.params.user_id;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "#FFFF" }}>Date: {date}</Text>
        <Text style={{ color: "#FFFF" }}>Hour: {hour}</Text>
      </View>
      <Formik
        validationSchema={climbingItemValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) =>
          saveClimbingItem(values, fullDate, navigation, user_id)
        }
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <View>
              <FormikInputValue
                style={[styles.formInput, styles.formDescription]}
                name="description"
                placeholder="Descripcion"
                onChangeText={handleChange("description")}
              />

              <FormikInputValue
                style={styles.formInput}
                name="image"
                placeholder="Url image"
                onChangeText={handleChange("image")}
              />
              <Pressable style={styles.createButton} onPress={handleSubmit}>
                <Text style={{ color: "#FFFF" }}> Crear </Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  formInput: {
    width: 250,
    marginTop: 30,
  },

  formDescription: {
    height: 100,
    textAlign: "auto",
  },

  title: {
    backgroundColor: "purple",
    marginTop: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },

  createButton: {
    backgroundColor: "#24a0ed",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
  },
});

const initialValues = {
  description: "",
  image: "",
};

const saveClimbingItem = async (values, date, navigation, user_id) => {
  await fetch("http://192.168.0.29:3000/climbingItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: values.description,
      image: values.image,
      date: date,
      user_id: user_id,
    }),
  })
    .then(() => {
      navigation.navigate("Home", {
        newElement: true,
      });
    })
    .catch(function (res) {
      console.log(res);
    });
};
