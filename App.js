import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  
} from 'react-native';

const Stack = createStackNavigator();


function ScreenA( {navigation}){
  const onPressHandler = () => {
    navigation.navigate('Screen_B')

  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
      onPress = {onPressHandler }
      style={({ pressed}) => ({ backgroundColor: pressed ? '#ddd' : 'black'})}>
        <Text
        style={styles.text}
        
       >
         Go to Screen B

        </Text>

      </Pressable>
    </View>
  )
}


function ScreenB(){
  const onPressHandler = () => {
    navigation.goBack();

  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
      onPress = {onPressHandler }
      style={({ pressed}) => ({ backgroundColor: pressed ? 'white' : 'pink'})}>
        <Text
        style={styles.text}
        
       >
         Go Back to Screen A

        </Text>

      </Pressable>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Stack.Screen
        name='Screen_A'
        component={ScreenA}
        // options={{
        //   header: () => null
        // }}
      />
      <Stack.Screen
        name='Screen_B'
        component={ScreenB}
      />

      

      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'blue'
  }
})

export default App;