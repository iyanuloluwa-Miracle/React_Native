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
      <View style={styles.view1}>
        <Text style={styles.wrapper}>1</Text>

      </View>

      <View style={styles.view2}>
        <Text style={styles.wrapper}>2</Text>

      </View>


      <View style={styles.view3}>
        <Text style={styles.wrapper}>3</Text>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor: 'brown',
    alignItems:'stretch',
    justifyContent: 'center',
   
  },
  view1:{
    flex:1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center'
  },
  view2:{
    flex:1,
    backgroundColor:'violet',
    alignItems:'center',
    justifyContent:'center'
  },
  view3:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center'
  },
 
  wrapper:{
    color:'black',
    fontSize:30,
    fontStyle:'black',
    margin:20
  }, 
 
  
});
