import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Touchable_Example = () => {
  const onPress = (msg) => {
    alert("Alert for" + msg);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => onPress("TouchableHighlight Preass")}
        >
          <Text>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress("TouchableOpacity Preass")}
        >
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", //color of button
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
