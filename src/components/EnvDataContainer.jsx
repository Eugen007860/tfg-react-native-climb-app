import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, Text, Pressable } from "react-native";

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
  const [climbingEnvData, setclimbingEnvData] = useState(null);
  const id = props.id;

  const fetchClimbEnv = async () => {
    const data = await fetch(
      `http://192.168.0.29:3000/climbingEnv?item_id=${id}`
    );
    const json = await data.json();
    setclimbingEnvData(json[0]);
  };

  useEffect(() => {
    fetchClimbEnv();
  }, [props]);

  return (
    <View>
      {climbingEnvData && (
        <View style={styles.envDataContainer}>
          <View style={styles.envItem}>
            <Entypo name="location" size={30} />
            <Text style={styles.envText}> {climbingEnvData.location} </Text>
          </View>
          <View style={styles.envItem}>
            <FontAwsome5 name="temperature-low" size={30} />
            <Text style={styles.envText}> {climbingEnvData.temperature} </Text>
          </View>
          <View style={styles.envItem}>
            <FontAwsome5 name="hand-holding-water" size={30} />
            <Text style={styles.envText}> {climbingEnvData.humidity} </Text>
          </View>
          {/* <View style={styles.envItem}>
            <Entypo name="bar-graph" size={30} />
            <Text style={styles.envText}> Ver gráfico </Text>
          </View> */}
        </View>
      )}

      {!climbingEnvData && (
        <View>
          <Pressable
            style={props.buttonStyle}
            onPress={() =>
              props.navigation.navigate("Registrar datos entorno", { id: id })
            }
          >
            <Text style = {{color: "#FFFF"}}>Registrar datos de entorno</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default EnvDataContainer;
