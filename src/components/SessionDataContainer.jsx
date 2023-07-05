import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import StrengthItem from "./StrengthItem";

const SessionDataContainer = (props) => {
  const id = props.id;
  const [climbingSessionData, setClimbingSessionData] = useState(null);

  const fetchClimbingSession = async () => {
    const data = await fetch(
      `http://192.168.0.29:3000/climbingSession?item_id=${id}`
    );
    const json = await data.json();
    setClimbingSessionData(json[0]);
  };

  useEffect(() => {
    fetchClimbingSession();
  }, [props]);

  return (
    <View>
      {climbingSessionData && (
        <View>
          <StrengthItem strength={climbingSessionData.hand_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Mano</Text>:
          </StrengthItem>
          <StrengthItem strength={climbingSessionData.index_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Indice</Text>:
          </StrengthItem>
          <StrengthItem strength={climbingSessionData.middle_fingerStrength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Corazon</Text>:
          </StrengthItem>
          <StrengthItem strength={climbingSessionData.ring_finger_strength}>
            Fuerza maxima <Text style={{ fontWeight: "bold" }}>Anular</Text>:
          </StrengthItem>
        </View>
      )}
      {!climbingSessionData && (
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
