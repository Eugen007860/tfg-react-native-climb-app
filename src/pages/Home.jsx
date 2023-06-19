import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Button } from "react-native";
import ClimbItem from "../components/ClimbItem";

export default function Home({ navigation }) {
  const [userLogged, setUserLogged] = useState(true);
  const [climbItemList, setClimbItemList] = useState(null)

  const fetchClimbItems = async () => {
    const data = await fetch("http://192.168.0.29:3000/climbItems");
    const json = await data.json();
    setClimbItemList(json)
  };

  useEffect(() => {
    fetchClimbItems()
  }, []);

  return (
    <View>
      {userLogged && climbItemList && (
        <FlatList
          data={climbItemList}
          ItemSeparatorComponent={() => <Text></Text>}
          renderItem={({ item }) => <ClimbItem {...item} {...navigation} />}
        />
      )}

      {!userLogged && (
        <Button
          title="You are not looged"
          onPress={() => navigation.navigate("Log in")}
        ></Button>
      )}
    </View>
  );
}
