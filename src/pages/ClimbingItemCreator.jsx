import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue";
import { climbingItemValidationSchema } from "../validationSchemas/climbingItem";

export default function ClimbingItemCreator({ navigation, route }) {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  return (
    <View>
      <View>
        <Text>{date}</Text>
      </View>
      <Formik
        validationSchema={climbingItemValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => saveClimbingItem(values, date, navigation)}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <View>
              <FormikInputValue
                name="description"
                placeholder="Descripcion"
                onChangeText={handleChange("description")}
              />

              <FormikInputValue
                name="image"
                placeholder="Url image"
                onChangeText={handleChange("image")}
              />
              <Pressable onPress={handleSubmit}>
                <Text> Crear </Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const initialValues = {
  description: "",
  image: "",
};

const saveClimbingItem = async (values, date, navigation) => {
  await fetch("http://192.168.0.29:3000/climbingItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: values.description,
      image: values.image,
      date: date,
    }),
  })
    .then(() => {
      navigation.navigate("Home", {
        newElement: true
      });
    })
    .catch(function (res) {
      console.log(res);
    });
};
