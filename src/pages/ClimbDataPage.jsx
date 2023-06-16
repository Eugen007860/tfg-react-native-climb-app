import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import ClimbSessionData from "../data/ClimbSessionData";
import StrengthItem from "../components/StrengthItem";
import EnvDataContainer from "../components/EnvDataContainer";

export default function ClimbDataPage({ navigation, route }) {
  const id = route.params.id;
  const strengthData = ClimbSessionData.find((item) => {
    return item["id"] == id;
  });

  useEffect(() => {
    navigation.setOptions({ title: `Climb Session id: ${id}` });
  }, []);

  return (
    <View>
      <StrengthItem strength={strengthData.strengthData.handStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Mano</Text>:
      </StrengthItem>
      <StrengthItem strength={strengthData.strengthData.indexStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Indice</Text>:
      </StrengthItem>
      <StrengthItem strength={strengthData.strengthData.middleFingerStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Corazon</Text>:
      </StrengthItem>
      <StrengthItem strength={strengthData.strengthData.ringFingerStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Anular</Text>:
      </StrengthItem>
      <EnvDataContainer id={id}/>
    </View>
  );
}
