import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import Txtinput from "./components/Txtinput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import LotsOgGreeting from "./components/LotsOgGreeting";
import MyCustomTextWith from "./components/MyCustomTextWith";
import Count from "./components/Count";
import TxtInput2 from "./components/TxtInput2";
import UserNamePassword from "./components/UserNamePassword";
import AlertExample from "./components/AlertExample";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import Touchable_Example from "./components/Touchable_Example";
import TouchablePractice from "./components/TouchablePractice";
const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Txtinput/> */}
        {/*<CustomComponent/>*/}
        {/*<Logo/>*/}
        {/*<LotsOgGreeting/>*/}
        {/*<MyCustomTextWith/>*/}
        {/* <Count num={2} title='click'/> */}
        {/*<TxtInput2/>*/}
        {/* <UserNamePassword/> */}
        {/* <AlertExample /> */}
        {/* <ImageWithTextInput/> */}
        {/* <ButtonExample/> */}
        {/* <Touchable_Example/> */}
        <TouchablePractice/>
      </View>
    </SafeAreaView>
  );
};

export default App;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
