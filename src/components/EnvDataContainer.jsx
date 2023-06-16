import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, Text } from "react-native";
import ClimbEnvData from "../data/ClimbEnvData";

const styles = StyleSheet.create({
  envDataContainer: {
    margin: 15,
    gap: 15,
  },
  envItem: {
    flexDirection: "row",
  },
  envText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#900",
    marginLeft: 10,
  },
});

const EnvDataContainer = (props) => {
  climbSessionId = props.id;
  const envData = ClimbEnvData.find((item) => {
    return item.id == climbSessionId;
  }).envData;

  return (
    <View style={styles.envDataContainer}>
      <View style={styles.envItem}>
        <Entypo name="location" size={30} />
        <Text style={styles.envText}> {envData.location} </Text>
      </View>
      <View style={styles.envItem}>
        <FontAwsome5 name="temperature-low" size={30} />
        <Text style={styles.envText}> {envData.temperature} </Text>
      </View>
      <View style={styles.envItem}>
        <FontAwsome5 name="hand-holding-water" size={30} />
        <Text style={styles.envText}> {envData.humidity} </Text>
      </View>
      <View style={styles.envItem}>
        <Entypo name="bar-graph" size={30} />
        <Text style={styles.envText}> Ver gráfico </Text>
      </View>
    </View>
  );
};

export default EnvDataContainer;
