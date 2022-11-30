import { View, Text ,Button, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'

const Count = ({num,title}) => {
    //const {num,title}=props;
    const[count,setCount]=useState(num);

    /* useEffect(()=>{
        console.log('ues effect1');
    })

    useEffect(()=>{
        console.log('ues effect2');
    },[count])

    useEffect(()=>{
        console.log('ues effect3');
    },[]) */
  return (
    <View >
      <Text>{title}:{count}</Text>
      <Button
      title='click me'
      onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default Count

