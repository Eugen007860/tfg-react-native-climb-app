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

import RNBluetoothClassic, { BluetoothEventType } from 'react-native-bluetooth-classic';


export default function BluetoothHandler() {
  const [bluetoothEnabled, setBluetoothEnabled] = useState("No disponible");

  const checkBluetooth = async () => {
    try {
      const available = await RNBluetoothClassic.isBluetoothEnabled();
      setBluetoothEnabled("Disponible");
    } catch (err) {
      console.log(err);
    }
  };

  const requestAccessFineLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Access fine location required for discovery",
        message:
          "In order to perform discovery, you must enable/allow " +
          "fine location access.",
        buttonNeutral: 'Ask Me Later"',
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  startDiscovery = async () => {
    const granted = await requestAccessFineLocationPermission();

    if (!granted) {
      throw new Error(`Access fine location was not granted`);
    }

    try {
      let paired = await RNBluetoothClassic.getBondedDevices();
      console.log("___________________________PAIRED_______________________________");
      // console.log(paired);
      console.log("___________________________UNPAIRED_______________________________");
      let unpaired = await RNBluetoothClassic.getConnectedDevices();
      console.log(unpaired)
      // console.log(await device.connect());


    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    RNBluetoothClassic.requestBluetoothEnabled();
    checkBluetooth();
    startDiscovery();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text>Bluetooth status:</Text>
        <Text style={styles.statusLabel}>{bluetoothEnabled}</Text>
      </View>
      <Pressable
        style={styles.settingsButton}
        onPress={() => RNBluetoothClassic.openBluetoothSettings()}
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
