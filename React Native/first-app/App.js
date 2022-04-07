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
  const [decriment,setdecriment]=useState(0)
  const click=()=>{
    setCounter(count+1)

  }

  const dec_click=()=>{
    setdecriment(decriment-1)
  }


  
  return (
    <View style={styles.body}>
      <Text style={styles.Text}>{count*5}</Text>
      <Text style={styles.Button} onPress={click}>Incremeant</Text>
      <Text style={styles.Text}>You clicked {count}</Text>
      <Text style={styles.Text}>{decriment*5}</Text>
      <Text style={styles.Button} onPress={dec_click}>Decremeant</Text>
      <Text style={styles.Text}>You clicked {decriment}</Text>

    
    
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
   },
   Button: {
     fontSize:20,
     backgroundColor:'yellow'
   }
})
