import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#FFFFAA",
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
        gap: 4
    },

    acceptButton: {
        backgroundColor: "#FFF522",
        paddingHorizontal: 8,
        borderRadius: 10,
        margin: 3,
    }
})

const UserErrorPopUp = ({ errorHandler }) => {
  return (
    <View style={styles.container}>
      <Text>¡El usuario no existe!</Text>
      <Pressable style={styles.acceptButton} onPress={errorHandler}>
        <Text style={{fontWeight: "bold"}}>Aceptar</Text>
      </Pressable>
    </View>
  );
};

export default UserErrorPopUp;
