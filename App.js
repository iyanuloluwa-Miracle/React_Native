import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View,  TouchableOpacity, TouchableHighlight, TextInput, Button, Pressable} from "react-native";




export default function App() {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false)

  const onPressHandler = () =>{
    SetSubmitted(!submitted)

  }

 

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please Write your name:
      </Text>
      <TextInput 
      style={styles.input}
      placeholder="e.g. type something here"
      onChangeText={(value) => SetName(value)}
      />
      {/* <Button 
      title={submitted ? 'clear':'Submit'}
      onPress={onPressHandler}
      color='#00f'

      /> */}
      <Pressable
      onPress={onPressHandler}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: '#00f'}}
      style={({pressed})=> [
        { backgroundColor: pressed ? '#ddddd' : '#00ff00'},
        styles.button
      ]}>
        <Text style={styles.text}>{submitted ? 'clear':'Submit'}</Text>

      </Pressable>

      {submitted ?
        
        <Text style={styles.text}>
          You are registerd as {name}
        </Text>
        :
        null

      }

      


    </View>
   
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems:'center'
  },
  input:{
    borderWidth: 1,
    width:230,
    borderColor: 'pink',
    borderRadius: 5,
    textAlign: 'center',
    fontSize:20,
    marginBottom: 10

  },
  text: {
    fontSize: 27,
    color: "Red",
    margin:10   
  },

  button:{
    width: 150,
    height: 50,
    backgroundColor:'#00ff00',
    alignItems: 'center'

  }
});
