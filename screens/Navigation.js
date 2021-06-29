import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home/HomeScreen";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./Login/LoginScreen";

export default function NavigationComponent() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
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
        name="Login"
        component={LoginScreen}
        options={{ title: "Inicio de sesión" }}
      />
    </Stack.Navigator>
  );
}
