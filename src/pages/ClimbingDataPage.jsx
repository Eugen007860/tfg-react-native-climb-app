import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import EnvDataContainer from "../components/EnvDataContainer";
import SessionDataContainer from "../components/SessionDataContainer";
import { StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function ClimbDataPage({ navigation, route }) {
  const id = route.params.id;

  useEffect(() => {
    navigation.setOptions({ title: `Identificador del registro: ${id}` });
  }, []);

  return (
    <View>
      <SessionDataContainer
        id={id}
        navigation={navigation}
        buttonStyle={styles.redirectButton}
      />

      <EnvDataContainer
        id={id}
        navigation={navigation}
        buttonStyle={styles.redirectButton}
      />

      <Pressable style={styles.deleteButton} onPress={() => deleteClimbingItem(id, navigation)}>
        <EvilIcons name="trash" size={25} style={{color: "#FFFF", alignSelf: "baseline"}} />
        <Text style={styles.deleteText}>Eliminar registro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  redirectButton: {
    backgroundColor: "purple",
    alignSelf: "flex-start",
    margin: 10,
    padding: 10,
  },

  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#C60C30",
    marginTop: "auto",
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },

  deleteText: {
    color: "#FFFF",
    textDecorationLine: "underline",
    justifyContent: "center",
  },
});

const deleteClimbingItem = async (id, navigation) => {
  await fetch(`http://192.168.0.29:3000/climbingItem?id=${id}`, {
    method: "DELETE"
  })
    .then(() => {
      navigation.navigate("Home", {
        id: id,
      });
    })
    .catch(function (res) {
      console.log(res);
    });
};
