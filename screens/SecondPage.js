import { View, Text,StyleSheet,SafeAreaView} from "react-native";
import React from "react";

const SecondPage = ({ route }) => {
  const { post } = route.params;
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>Valued passed from First Page: {post}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
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
