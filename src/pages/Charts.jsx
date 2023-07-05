import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";
import IndividualChart from "../components/IndividualChart";

export default function Charts({ route }) {
  const userId = route.params.userId;
  const handParts = [
    { strength: "hand_strength", handPart: "Mano" },
    { strength: "index_strength", handPart: "Dedo índice" },
    { strength: "middle_fingerStrength", handPart: "Dedo corazón" },
    { strength: "ring_finger_strength", handPart: "Dedo anular" },
  ];
  return (
    <View>
      <FlatList
        data={handParts}
        renderItem={({ item }) => (
          <IndividualChart
            userId={userId}
            strength={item.strength}
            handPart={item.handPart}
          />
        )}
      />
    </View>
  );
}
