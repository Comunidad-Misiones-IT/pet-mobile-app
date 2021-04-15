import * as React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import HomeScreen from "../mobile-app/screens/HomeScreen";
import RegisterScreen from "../mobile-app/screens/RegisterScreen";
import SesionScreen from "../mobile-app/screens/SesionScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar ventana"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

function NotificationsScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Bienvenida" component={HomeScreen} />
      <Drawer.Screen name="Registro" component={RegisterScreen} />
      <Drawer.Screen name="Inicio de sesión" component={SesionScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NotificationsScreen />
    </NavigationContainer>
  );
}
