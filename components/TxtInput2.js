import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const TxtInput2 = () => {
  const [userName, setUserName] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>insert any text in below input</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
            setUserName(userName);
          }}
          pleceholder={"Input UserName"}
          style={styles.input}
        />
        <Text style={{color:"blue" }}>Thai-Nichi Institute of Technology</Text>
      </View>
    </SafeAreaView>
  );
};

export default TxtInput2;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    marginTop: 20,

    backgroundColor: "#ffffff",
  },

  input: {
    width: 250,

    height: 44,

    padding: 10,

    marginTop: 20,

    marginBottom: 10,

    backgroundColor: "#e8e8e8",
  },
});
