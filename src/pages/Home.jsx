import React, { useState } from "react";
import { Text, View, FlatList, Image, Button } from "react-native";
import mockedData from "../data/ClimbItemData";
import ClimbItem from "../components/ClimbItem";

export default function Home({navigation}) {
  const [userLogged, setUserLogged] = useState(true)
  return (
    <View>
      {userLogged && <FlatList
        data={mockedData}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item }) => <ClimbItem {...item} {...navigation} />}
      /> }

      {!userLogged && <Button title="You are not looged" onPress={() => navigation.navigate('Log in')}></Button>}
    </View>
  );
}
