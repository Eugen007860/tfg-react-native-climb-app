import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import ClimbingItem from "../components/ClimbingItem";

export default function Home({ navigation, route }) {
  const [userLogged, setUserLogged] = useState(true);
  const [climbItemList, setClimbItemList] = useState(null);

  const fetchClimbItems = async () => {
    const data = await fetch("http://192.168.0.29:3000/climbingItem");
    const json = await data.json();
    setClimbItemList(json);
  };

  useEffect(() => {
    fetchClimbItems();
    if (route.params && route.params.hasOwnProperty("logged"))
      setUserLogged(route.params.logged);
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      {userLogged && climbItemList && (
        <View style={{ flex: 1 }}>
          <FlatList
            data={climbItemList}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item }) => (
              <ClimbingItem {...item} {...navigation} />
            )}
          />
          <Pressable
            style={styles.creatorButton}
            onPress={() => navigation.navigate("Crear Registro escalada")}
          >
            <Text style={{ color: "white" }}>Crear registro</Text>
          </Pressable>
        </View>
      )}

      {!userLogged && (
        <View style={{ alignSelf: "center", width: 200, marginTop: 10}}>
          <Button
            title="No has iniciado sesión"
            onPress={() => navigation.navigate("Log in")}
          ></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  creatorButton: {
    alignSelf: "flex-end",
    backgroundColor: "purple",
    height: 30,
    justifyContent: "center",
    padding: 3,
    borderRadius: 4,
    margin: 5,
  },
});
