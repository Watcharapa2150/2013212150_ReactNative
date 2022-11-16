import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>React native with Thai-Nichi</Text>
      <Text style={{color:"blue",fontSize:15}}>by Watcharapa Moonkam</Text>
      <Text style={[styles.textStyle,styles.warning]}>student id: 2013212150</Text>
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
    },
    textStyle: {
      
      fontSize:30,
    },
    warning: {
      fontWeight:"bold",
      color:"red",
    }
  
  });