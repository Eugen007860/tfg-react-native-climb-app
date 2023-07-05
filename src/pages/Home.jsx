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
  const [userLogged, setUserLogged] = useState(false);
  const [climbItemList, setClimbItemList] = useState(null);
  const [userId, setUserId] = useState(null);


  const fetchClimbItems = async () => {
    const data = await fetch(
      `http://192.168.0.29:3000/climbingItem?user_id=${userId}`
    );
    const json = await data.json();
    setClimbItemList(json);
  };

  useEffect(() => {
    if (route.params && route.params.hasOwnProperty("user_id")){
      setUserId(route.params.user_id)
    }
    if (route.params && route.params.hasOwnProperty("logged")){
      setUserLogged(route.params.logged);
    }
  }, [route.params]);

  useEffect ( () => {
    fetchClimbItems()
  }, [userId, route.params])

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
          <View style={styles.footer}>
            <Pressable
              style={styles.creatorButton}
              onPress={() => navigation.navigate("Bluetooth")}
            >
              <Text style={{ color: "white" }}>Bluetooth</Text>
            </Pressable>

            <Pressable
              style={styles.creatorButton}
              onPress={() => navigation.navigate("Graficas", {userId : userId})}
            >
              <Text style={{ color: "white" }}>Gráficas</Text>
            </Pressable>

            <Pressable
              style={styles.creatorButton}
              onPress={() =>
                navigation.navigate("Crear Registro escalada", {
                  user_id: userId,
                })
              }
            >
              <Text style={{ color: "white" }}>Crear registro</Text>
            </Pressable>
          </View>
        </View>
      )}

      {!userLogged && (
        <View style={{ alignSelf: "center", width: 200, marginTop: 10 }}>
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
    width: 100,
    alignItems: "center",
  },

  footer: {
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#CCCCCC",
  },
});
