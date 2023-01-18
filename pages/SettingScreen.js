import { View, Text,Button } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from "@react-navigation/native";

const SettingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
      <Text style={{marginBottom:15, fontSize:34}}>Setting Screen</Text>
      <Button  title='go to home' onPress={()=>navigation.navigate("Home")}/>
      
    </View>
  
  )
}

export default SettingScreen