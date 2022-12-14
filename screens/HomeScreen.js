import { View, Text, Button} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name='home' size={30} color = '#b0c4de'/>
          <Text>HomeScreen</Text>
          <Button
            title="เกี่ยวกับเรา"
            onPress={() => navigation.navigate("About",{
                email:'reactnative@tni.ac.th'
            })}
          />
        </View>);
}

export default HomeScreen