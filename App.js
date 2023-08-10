import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [name,setName] = useState('Style Test')

  
  
  const onClickHandler = ()=>{
    setName('Style Test is Done')
  }




  return (
    <View style={styles.body}>
      <Text style={styles.wrapper}>{name}</Text>
      <View style={styles.button}>
        <Button title='update' onPress={onClickHandler}></Button>  
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor:'orange',
    borderRadius:20,
    margin: 40
  },
 
  wrapper:{
    color:'black',
    fontSize:30,
    fontStyle:'black',
    margin:20
  }, 
  button:{
    width:200,
    height:150

  } 
});
