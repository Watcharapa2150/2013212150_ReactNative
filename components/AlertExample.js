import { View, Text, Button, Alert, SafeAreaView,StyleSheet } from "react-native";
import React from "react";

const AlertExample = () => {

  const simpleAlertdandler = () => {
    alert("hallo");
  };

  const twoOptionAlertHandler = () => {
    Alert.alert(
      //title
      "Hallo",
      //body
      "I am two option alert. Doyou want to cancel me",
      [
        {
          text: "yes",
          onPress: () => alert("Yes Pressed"),
        },
        {
          text: "No",
          onPress: () => alert("No Pressed"),
        },
      ]
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Button title="Simple Alert" onPress={simpleAlertdandler} />
        <Button title="Alert with two option" onPress={twoOptionAlertHandler} />
        <Text>AlertExample</Text>
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
