import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      SetshowWarning(true);
    }
  }

  return (
    <ImageBackground
      source={{uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}} 
      style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 charachters</Text>
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color:'#fff'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {
        submitted ?
        <View style={styles.body}>
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
            <Image
            style={styles.image}
            resizeMethod='stretch'
            source={require('./assets/done.png')}
            />
          </View>  
          :
          <Image
            style={styles.image}
            resizeMethod='stretch'
            blurRadius={5}
            source={{uri:'data:image/jpeg;base64,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'}}
            />
            
      }
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  image:{
    width: 100,
    height: 100,
    margin: 10

  }
});

export default App;