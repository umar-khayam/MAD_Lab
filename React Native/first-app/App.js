import { 
  StatusBar 
} from 'expo-status-bar';

import React, {useState} from 'react'
import { 
  Button,
  Linking,
  StyleSheet,
  Text, 
  View,
} from 'react-native';

export default function App() {
  const [count,setCounter]=useState(0)
  const click=()=>{
    setCounter(count+1)
  }
  
  return (
    <View style={styles.body}>
      <Text style={styles.Text}>{count*5}</Text>
      <Button title='Update' onPress={click}></Button>
      <Text style={styles.Text}>You clicked {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex:1,
     backgroundColor: '#ffff',
     alignItems: 'center',
     justifyContent:'center'
   },

   Text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
   }
})
