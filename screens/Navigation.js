import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home/HomeScreen";
import RegisterScreen from "./RegisterScreen";
import SessionScreen from "./SessionScreen";

export default function NavigationComponent() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Bienvenida" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="Sesion"
        component={SessionScreen}
        options={{ title: "Inicio de sesión" }}
      />
    </Stack.Navigator>
  );
}
