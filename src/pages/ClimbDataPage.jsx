import React from "react";
import { Text, View } from "react-native";

export default function ClimbDataPage({ route }) {
  const id  = route.params.id;
  return (
    <View>
      <Text>Climb regard ID: {id}</Text>
    </View>
  );
}
