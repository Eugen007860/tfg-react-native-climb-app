import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, Text } from "react-native";

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
  const [climbEnvData, setClimbEnvData] = useState(null);
  const climbSessionId = props.id;

  const fetchClimbEnv = async () => {
    const data = await fetch(`http://192.168.0.29:3000/climbEnv?item_id=${climbSessionId}`);
    const json = await data.json();
    setClimbEnvData(json[0]);
  };

  useEffect(() => {
    fetchClimbEnv();
  }, []);


  return (
    <View>
      {climbEnvData && (
        <View style={styles.envDataContainer}>
          <View style={styles.envItem}>
            <Entypo name="location" size={30} />
            <Text style={styles.envText}> {climbEnvData.location} </Text>
          </View>
          <View style={styles.envItem}>
            <FontAwsome5 name="temperature-low" size={30} />
            <Text style={styles.envText}> {climbEnvData.temperature} </Text>
          </View>
          <View style={styles.envItem}>
            <FontAwsome5 name="hand-holding-water" size={30} />
            <Text style={styles.envText}> {climbEnvData.humidity} </Text>
          </View>
          <View style={styles.envItem}>
            <Entypo name="bar-graph" size={30} />
            <Text style={styles.envText}> Ver gráfico </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default EnvDataContainer;
