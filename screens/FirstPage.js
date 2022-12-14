import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const FirstPage = ({ navigation }) => {
  const [postText,setPostText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>
        Please insert your name to pass it to second screen
      </Text>
      <TextInput
        placeholder="Please Text Here!! "
        value={postText}
        onChangeText={setPostText}
        style={{ height: 50, padding: 10, backgroundColor: "white",margin:20 }}
      />
      <Button
        title="Go Next"
        
        onPress={() => navigation.navigate("SecondPage", { post: postText })}
      />
      <Text style={styles.textStyle}>www.tni.ac.th</Text>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    padding: 20,
  },

  heading: {
    fontSize: 25,

    textAlign: "center",

    marginVertical: 10,
  },

  textStyle: {
    textAlign: "center",

    fontSize: 16,

    marginVertical: 10,
  },
});
