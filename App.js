import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import LogIn from "./src/pages/LogIn";
import SignIn from "./src/pages/SignIn";
import ClimbingDataPage from "./src/pages/ClimbingDataPage";
import ClimbingItemCreator from "./src/pages/ClimbingItemCreator";
import ClimbingSessionForm from "./src/pages/ClimbingSessionForm";
import ClimbingEnvForm from "./src/pages/ClimbingEnvForm";
import BluetoothHandler from "./src/pages/BluetoothHandler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bluetooth" component={BluetoothHandler} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen
          name="Crear Registro escalada"
          component={ClimbingItemCreator}
        />
        <Stack.Screen
          name="Registrar datos fuerza"
          component={ClimbingSessionForm}
        />
        <Stack.Screen
          name="Registrar datos entorno"
          component={ClimbingEnvForm}
        />
        <Stack.Screen
          name="Climb Session"
          component={ClimbingDataPage}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
