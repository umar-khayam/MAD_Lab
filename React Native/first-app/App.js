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
  const [name,setName]=useState('Umar')
  const [session,setSession]=useState('6')
  const click=()=>{
    setName('Khayam')
    setSession(9)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.Text}>{name}</Text>
      <Text style={styles.Text}>{session}</Text>
      <Button title='Update' onPress={click}></Button>
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
