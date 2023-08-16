import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Linking, StyleSheet, Text, View, ScrollView, RefreshControl, TextInput } from "react-native";


export default function App() {

  const [name, SetName] = useState('')
 

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please Write your name:
      </Text>
      <TextInput 
      style={styles.input}
      placeholder="e.g. type something here"
      onChangeText={(value) => SetName(value)}
      secureTextEntry
      />

      <Text style={styles.text}>
        Your name is : {name}
      </Text>

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
    fontSize:20

  },
  text: {
    fontSize: 27,
    color: "Red",
    margin:10
    
  },
});
