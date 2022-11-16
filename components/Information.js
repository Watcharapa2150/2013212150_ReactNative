import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React native with Thai-Nichi</Text>
      <Text>by Watcharapa Moonkam</Text>
      <Text>student id: 2013212150</Text>
    </View>
  )
}

export default Information
const styles = StyleSheet.create({

    container:{
      flax:1,
      backgroundColor: "#33FFFF",
      alignItems:"center",
      justifyContent:"center"
    }
  
  })