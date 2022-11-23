import { View, Text } from 'react-native'
import React from 'react'

const Name = (props)=>{
    const {fName1,lName1}= props;
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <text style={{color:'blue',fontSize:20}}> Your fistname is {fName1} and lastname is {lName1}</text>
        </View>
    );
}

const MyCustomTextWith = () => {
  return (
    <View>
      <Name fName1="Watcharapa" lName1="Moonkam"/>
      <Name fName1="Pattarawadee" lName1="Wongkamsai"/>
    </View>
  )
}

export default MyCustomTextWith