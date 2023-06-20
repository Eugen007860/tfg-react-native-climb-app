import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import LogIn from "./src/pages/LogIn";
import SignIn from "./src/pages/SignIn";
import ClimbingDataPage from "./src/pages/ClimbingDataPage";
import ClimbingItemCreator from "./src/pages/ClimbingItemCreator";
import ClimbingSessionCreator from "./src/pages/ClimbigSessionCreator";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Crear Registro escalada" component={ClimbingItemCreator}/>
        <Stack.Screen name="Registrar datos escalada" component={ClimbingSessionCreator}/>
        <Stack.Screen
          name="Climb Session"
          component={ClimbingDataPage}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
