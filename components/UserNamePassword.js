import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkTextInput = () => {
    //Check for the Name TextInput

    if (!userName.trim()) {
      alert("Please Enter Name");

      return;
    }

    //Check for the Password TextInput
    if (!password.trim()) {
      alert("Please Enter Password");

      return;
    }
    //Checked Successfully

    alert("Successfully");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
            setUserName(userName);
          }}
          placeholder="Input UserName"
          style={styles.textInputStyle}
        />
        <TextInput
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          placeholder="Input Password"
          style={{ marginBottom: 15, ...styles.textInputStyle }}
        />
        
          <Button title="SUBMIT" onPress={checkTextInput} color="gray"/>
       
      </View>
    </SafeAreaView>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 35,
  },

  textInputStyle: {
    width: "100%",

    height: 40,

    paddingHorizontal: 5,

    borderWidth: 0.5,

    marginTop: 15,
  },
});
