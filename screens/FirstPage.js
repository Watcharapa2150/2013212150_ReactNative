import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const FirstPage = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>
        <TextInput
          placeholder="Please Text Here!! "
          value={postText}
          onChangeText={setPostText}
          style={{
            height: 50,
            padding: 10,
            backgroundColor: "white",
            margin: 20,
          }}
        />
        <Button
          title="Go Next"
          onPress={() => navigation.navigate("SecondPage", { post: postText })}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
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
  footer: {
    justifyContent: "flex-end",
  },
});
