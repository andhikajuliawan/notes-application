import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AddScreen,
  EditScreen,
  HomeScreen,
  InformationScreen,
} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default Navigation;

export function BottomNavigation() {
  return (

    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#031747",
        tabBarInactiveTintColor: "#0185B7",

        tabBarStyle: { height: 65 },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        headerShown: false,
        unmountOnBlur: true // menambahkan option ini  agar tidap masuk ke screen lain akan refresh halaman
      })}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add List"
        component={AddScreen}
        options={{
          tabBarLabel: "Add List",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-add-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Information"
        component={InformationScreen}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="ios-information-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}

      />
    </Tab.Navigator>
  );
}
