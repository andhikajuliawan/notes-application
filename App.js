import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AddScreen,
  EditScreen,
  HomeScreen,
  InformationScreen,
  NotesScreen,
} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator options={{ headerShown: false }}>
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default Navigation;

export function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add List" component={AddScreen} />
      <Tab.Screen name="Information" component={InformationScreen} />
    </Tab.Navigator>
  );
}
