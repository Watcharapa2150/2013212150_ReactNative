import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name})=>{
    //const {name}= props;
    return(
        <View style = {{alignItems:'center'}}>
            <text style={{color:'blue',fontSize:20}}>Hello : {name}</text>
        </View>
    );
}

const LotsOgGreeting = () => {
  return (
    <View style={{flex:1,alignItems:'center',top:50}}>
      <Greeting name = " Mary Christmas"/>
      <Greeting name = " Happy New Year"/>
      <Greeting name = " Songkran festival"/>
    </View>
  )
}

export default LotsOgGreeting