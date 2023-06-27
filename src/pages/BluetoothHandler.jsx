import React, { useState, useRef, useEffect, useCallback } from "react";
import { Constants } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Touchable,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";


export default function BluetoothHandler() {


  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text>Bluetooth status:</Text>
      </View>
      <Pressable
        style={styles.settingsButton}
        onPress={() => console.log("queso")}
      >
        <Text style={{ color: "#FFFF" }}>Bluetooth ajustes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 250,
  },

  statusContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },

  statusLabel: {
    backgroundColor: "#00DD00",
    color: "#FFFF",
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  settingsButton: {
    marginTop: 10,
    backgroundColor: "#24a0ed",
    alignItems: "center",
    borderRadius: 20,
  },
});
