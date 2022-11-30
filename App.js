import { View ,StyleSheet} from 'react-native'
import React from 'react'
import Txtinput from './components/Txtinput'
import CustomComponent from './components/CustomComponent'
import Logo from './components/Logo'
import LotsOgGreeting from './components/LotsOgGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import TxtInput2 from './components/TxtInput2'
import UserNamePassword from './components/UserNamePassword'
const App = () => {
  return (
    <View style={style.container}>
      {/* <Txtinput/> */}
      {/*<CustomComponent/>*/}
      {/*<Logo/>*/}
      {/*<LotsOgGreeting/>*/}
      {/*<MyCustomTextWith/>*/}
      {/* <Count num={2} title='click'/> */}
      {/*<TxtInput2/>*/}
      <UserNamePassword/>
    </View>
  )
}

export default App

const style =StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }


})
