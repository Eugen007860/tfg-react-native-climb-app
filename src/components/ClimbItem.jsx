import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const ClimbItem = (props) => {
  return (
    <View style={styles.container} key={props.id}>
      <Text style={styles.header}> {props.date}</Text>
      <View style={styles.content}>
        <Image source={{ uri: props.placeImage }} style={styles.image} />
        <Text>{props.description}</Text>
      </View>
      <Pressable
        style={styles.navigationButton}
        onPress={() =>
          props.navigate("Climb Regard", {
            id: props.id,
          })
        }
      >
        <Text>Ver mas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },

  container: {
    marginLeft: 5,
    marginBottom: 5,
  },

  content: {
    flexDirection: "row",
  },

  navigationButton: {
    backgroundColor: "#24a0ed",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 3,
    borderRadius: 4,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 4,
  },
});

export default ClimbItem;
