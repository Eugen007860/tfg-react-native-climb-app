import { useField } from "formik";
import React from "react";
import { Pressable, Text } from "react-native";
// import { BluetoothSerial } from "react-native-bluetooth-serial";


const getValueFromDevice = async({ setValue }) => {
  //TODO: connect by bluethoot to stregth device and get strength data
  // console.log( await BluetoothSerial.isEnabled())
  // console.log(await BluetoothSerial.list())
  ////////////////////////////////////////////////////////////////////
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
        <Text style={{color: "#FFF"}}> Obtener </Text>
      </Pressable>
  );
};

export default GetterButton;
