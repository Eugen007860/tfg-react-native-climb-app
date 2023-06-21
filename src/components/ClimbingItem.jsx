import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const ClimbItem = (props) => {
  const date = props.date.slice(0, 10);
  const hour = props.date.slice(14, 19);
  return (
    <View style={styles.container} key={props.climb_item_id}>
      <Text style={styles.header}> {date} </Text>
      <View style={styles.content}>
        <Image source={{ uri: props.placeImage }} style={styles.image} />
        <Text>{props.description}</Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.navigationButton}
          onPress={() =>
            props.navigate("Climb Session", {
              id: props.climb_item_id,
            })
          }
        >
          <Text style = {{color: "#FFFF"}}>Ver mas</Text>
        </Pressable>
        <Text style={[styles.hour]}> {hour}</Text>
      </View>
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

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  hour: {
    fontWeight: "bold",
    alignSelf: "center",
    marginRight: 5,
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
