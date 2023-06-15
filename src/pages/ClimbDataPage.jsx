import React from "react";
import { Text, View } from "react-native";
import ClimbSessionData from "../data/ClimbSessionData";
import StrengthItem from "../components/StrengthItem";

export default function ClimbDataPage({ navigation, route }) {
  const id = route.params.id;
  const climbData = ClimbSessionData.find((item) => {return item["id"]== id});
  navigation.setOptions({ title: `Climb Session id: ${id}` });

  return (
    <View>
      <StrengthItem strength={climbData.data.handStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Mano</Text>:
      </StrengthItem>
      <StrengthItem strength={climbData.data.indexStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Indice</Text>:
      </StrengthItem>
      <StrengthItem strength={climbData.data.middleFingerStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Corazon</Text>:
      </StrengthItem>
      <StrengthItem strength={climbData.data.ringFingerStrength}>
        Fuerza maxima <Text style={{ fontWeight: "bold" }}>Anular</Text>:
      </StrengthItem>
    </View>
  );
}
