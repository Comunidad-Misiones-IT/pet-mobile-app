import * as React from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Esta es una pantalla de bienvenida :)</Text>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Menú"
      />
    </View>
  );
}
