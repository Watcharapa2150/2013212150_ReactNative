import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

function FirstStack() {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
}
function SecondStack() {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// function MyNav(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.FirstStack name="First Stack" component={FirstStack} />
//       <Stack.SecondStack name="First Stack" component={FirstStack} />
//       <Stack.ThirdStack name="Third Stack" component={ThirdStack} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
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
        name="FirstPage"
        component={FirstStack}
        options={{ drawerLabel: "First Page option", title: "First Stack" }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondStack}
        options={{ drawerLabel: "Second Page option", title: "Second Stack" }}
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
