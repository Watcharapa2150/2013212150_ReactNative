import { TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const CreatPost = ({navigation}) => {
    const[postText,setPostText] = useState('');
  return (
    <>
    <TextInput
    multiline
    placeholder='Please Text Here!! '
    style = {{height:200,padding:10,backgroundColor:'white'}}
    value = {postText}
    onChangeText={setPostText}
    />
    <Button title='Done'
    onPress={()=>{
        navigation.navigate('HomePost',{post:postText})
    }}/>
    </>
  )
}

export default CreatPost