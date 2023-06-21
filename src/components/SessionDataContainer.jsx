import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import StrengthItem from "./StrengthItem";

const SessionDataContainer = (props) => {
  const id = props.id;
  const [climbSessionData, setClimbSessionData] = useState(null);

  const fetchClimbSession = async () => {
    const data = await fetch(
      `http://192.168.0.29:3000/climbingSession?item_id=${id}`
    );
    const json = await data.json();
    setClimbSessionData(json[0]);
  };

  useEffect(() => {
    fetchClimbSession();
  }, [props]);

  return (
    <View>
      {climbSessionData && (
        <View>
          <StrengthItem strength={climbSessionData.hand_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Mano</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.index_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Indice</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.middle_fingerStrength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Corazon</Text>:
          </StrengthItem>
          <StrengthItem strength={climbSessionData.ring_finger_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Anular</Text>:
          </StrengthItem>
        </View>
      )}
      {!climbSessionData && (
        <View>
          <Pressable
            style = {props.buttonStyle}
            onPress={() =>
              props.navigation.navigate("Registrar datos fuerza", { id: id })
            }
          >
            <Text style = {{color: "#FFFF"}}>Registrar datos de fuerza</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default SessionDataContainer;
