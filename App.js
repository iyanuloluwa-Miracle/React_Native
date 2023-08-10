import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.wrapper}>Learning React Native</Text>
      <Button title='click me' onPress={()=>{Linking.openURL('https://github.com/iyanuloluwa-Miracle?tab=repositories')}}></Button>  
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
