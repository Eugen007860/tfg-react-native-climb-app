import { useField } from "formik";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const getValueFromDevice = ({ setValue }) => {
  //TODO: connect by bluethoot to stregth device and get strength data
  setValue("ValorObtenido");
  console.log("Obtengo valor del dispositivo");
};

const GetterButton = (props) => {
  const name = props.name;
  [fieldProps, fieldMeta, fieldHelpers] = useField(name);
  const { setValue } = fieldHelpers;

  return (
    <Pressable
      style={styles.button}
      onPress={() => getValueFromDevice({ setValue })}
    >
      <Text> Obtener </Text>
    </Pressable>
  );
};

export default GetterButton;
