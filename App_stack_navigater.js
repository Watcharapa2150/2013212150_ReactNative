import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatPost from "./screens/CreatPost";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>HomeScreen</Text>
//       <Button
//         title="เกี่ยวกับเรา"
//         onPress={() => navigation.navigate("About")}
//       />
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>AboutScreen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle:{
          backgroundColor : '#e6e6fa'
        },
        headerTintColor : '#4b0082',
        headerTintStyle :{
          fontWeight : 'bold'
        }
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        {/* <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} /> 
        <Stack.Screen name="ThirdPage" component={ThirdPage} />  */}
      </Stack.Navigator>
    </NavigationContainer>
    // <FirstPage/>
  );
};

export default App;
