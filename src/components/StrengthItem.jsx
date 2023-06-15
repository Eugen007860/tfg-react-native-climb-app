import React from "react";
import {View, Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    itemContainer: {
      borderWidth: 1,
      paddingVertical: 5,
      borderRadius: 5,
      gap: 10,
    },

    strengthHeader: {
      textAlign: "center",
      fontSize: 20,
    },

    strengthScore: {
      textAlign: "center",
      color: "red",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

const StrengthItem = ({ children, strength }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.strengthHeader}>{children}</Text>
        <Text style={styles.strengthScore}>{strength}</Text>
      </View>
    );
  };

  export default StrengthItem
