import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import styles from "../components/styles";
  
  const FirstPage = ({ navigation }) => {
    const [postText, setPostText] = useState("");
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text> */}
          <Text style={styles.textTopStyle}>
            This is the First Page under
          </Text>
          <Text style={styles.textTopStyle}>
            First Page option
          </Text>
          <Button
            title="Go to Second Page"
            onPress={() => navigation.navigate("SecondPage", { post: postText })}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate("ThirdPage", { post: postText })}
          />
        </View>
        <View style={{justifyContent:'flex-end'}}>
          <Text style={styles.textBottomStyle}>React Native Drawer create by: Watcharapa</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default FirstPage;
  
  