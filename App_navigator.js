import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";

const Stack = createNativeStackNavigator();

function Home1({ navigation }) {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function Setting1({ navigation }) {
  return (
    <Stack.Navigator
    initialRouteName="SettingScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle" //t
              : "ios-information-circle-outline"; //f
          } else if (route.name === "Setting") {
            iconName = focused
              ? "ios-list-box" //t
              : "ios-list"; //f
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
function MyTabs2() {
  return (
    <Tab.Navigator
    initialRouteName="Setting"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle" //t
              : "ios-information-circle-outline"; //f
          } else if (route.name === "Setting") {
            iconName = focused
              ? "ios-list-box" //t
              : "ios-list"; //f
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b0e0e6",
          width: 240,
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    
    >
      
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{ drawerLabel: "Home", title: "Home" }}
      />
      <Drawer.Screen
        name="Setting"
        component={MyTabs2}
        options={{ drawerLabel: "Setting", title: "Setting" }}
      />
    </Drawer.Navigator>
    
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
  
    </NavigationContainer>
  );
};

export default App;
