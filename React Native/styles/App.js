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
  const [name,setName]=useState('1')
  const onclick=()=>{
    setName('Style test is done')
  }
  
  return (
    /*<View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.Text}>{name}</Text>
      </View>
      
    </View>*/
    <View style={styles.body}>
      <Text style={styles.text}>Expo Start</Text>
    </View>

  );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
    text: {
      alignItems: 'center',
      fontSize: 20,
    },
   /*body: {
     width: '100%',
     height: '50%',
     backgroundColor: '#ffff00',
     alignItems: 'center',
     justifyContent:'center',
     borderWidth: 10,
     borderColor: '#ff00ff'
     
  },
   view1: {
     width:100,
     height: 115,
     backgroundColor: 'blue',
     alignItems: 'center',
     justifyContent:'center',
  },

   Text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textTransform:'uppercase'
   }*/
})