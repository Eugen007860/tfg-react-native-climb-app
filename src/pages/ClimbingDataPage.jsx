import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import StrengthItem from "../components/StrengthItem";
import EnvDataContainer from "../components/EnvDataContainer";
import SessionDataContainer from "../components/SessionDataContainer";

export default function ClimbDataPage({ navigation, route }) {
  const id = route.params.id;

  useEffect(() => {
    navigation.setOptions({ title: `Climb Session id: ${id}` });
  }, []);

  return (
    <View>
      <SessionDataContainer id={id} navigation= {navigation} />
      <EnvDataContainer id={id} navigation = {navigation} />
    </View>
  );
}
