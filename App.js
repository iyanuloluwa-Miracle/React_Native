import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TextInput, Button, Pressable, ToastAndroid, Modal} from "react-native";

export default function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
 

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
      setModalVisible(false); // Hide the modal if it was shown before
    } else {
      SetshowWarning(true); // Show the modal if name length is <= 3
    }
  }

  return (
    <View style={styles.body}>
     <Modal
      visible={showWarning}
      transparent
      onRequestClose={ () =>
        SetshowWarning(false)
      }
      animationType="slide"
      hardwareAccelerated

      >
      <View style={styles.centered_view}>
        <View style={styles.warning_modal}>
          <View style={styles.warning_title}> 
            <Text style={styles.text}>WARNING!</Text>
            
          </View>
          <View style={styles.warning_body}>
            <Text>The name must be longer than 3 characters</Text>

          </View>
          <Pressable
            onPress={()=>SetshowWarning(false)}
            style={styles.warning_button}
            android_ripple={{color:'purple'}}>
            <Text style={styles.text}>Ok</Text>
          </Pressable>

         
        </View>

      </View>
      
      </Modal>
      <Text style={styles.text}>
        Please Write your name:
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g.John"
        onChangeText={(value) => setName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f'}}
        style={({pressed})=> [
          { backgroundColor: pressed ? '#ddddd' : '#00ff00'},
          styles.button
        ]}
      >
        <Text style={styles.text}>{submitted ? 'clear':'Submit'}</Text>
      </Pressable>

      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
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
    alignItems: 'center',
    justifyContent:"center"
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: 'pink',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 27,
    color: "Red",
    margin: 10,
    alignItems: 'center',
    justifyContent:"center",
    
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  centered_view:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'

  },
  warning_modal:{
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:'#000',
    borderRadius: 20

  },
  warning_title:{
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    
  },
  warning_body:{
    height:200,
    justifyContent: 'center',
    alignItems: 'center',


  },
  warning_button:{
    backgroundColor:'blue',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius:20,
  }
});
