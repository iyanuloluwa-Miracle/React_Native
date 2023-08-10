import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [name,setName] = useState('Iyanu')

  
  const [session,setSession] = useState({ number:6, title: 'state'})
  const [current,setCurrent] = useState(true)

  const onClickHandler = ()=>{
    setName('Programming with Dina')
    setSession({ number:7, title: 'style'})
    setCurrent(false)


  }




  return (
    <View style={styles.body}>
      <Text style={styles.wrapper}>{name}</Text>
      <Text style={styles.wrapper}>{current ?'current session': 'next session'}</Text>
      <Text style={styles.wrapper}>This is session number {session.number} and about {session.title} </Text>
      <Button title='update' onPress={onClickHandler}></Button>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent: 'center'
  },
 
  wrapper:{
    color:'white',
    fontSize:30,
    fontStyle:'italic',
    margin:20
  }
});
