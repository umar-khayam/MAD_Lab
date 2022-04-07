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
    <View style={styles.body}>
      
      <View style={styles.top}>
        <View style={{flex:1, backgroundColor:'#00ffff', alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.text}>
            1
          </Text>
        </View>

        <View style={{flex:2, backgroundColor:'#ff00ff', alignItems:'center',justifyContent:'center'}}>
          <Text>
            2
          </Text>
        </View>

        <View style={{flex:3, backgroundColor:'#ffff00', alignItems:'center',justifyContent:'center'}}> 
          <Text>
            3
          </Text>
        </View>
      </View>

      <View style={styles.top}>
        <View style={{backgroundColor:'#ff0000', flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
            4
          </Text>
        </View>
      </View>
      
      <View style={styles.top}>
        <View style={{backgroundColor:'#0fff0f', flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
            5
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={{backgroundColor:'#ffffff', flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
            6
          </Text>
        </View>

        <View style={{backgroundColor:'#0000ff', flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
            7
          </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    body: {
      marginTop:20,
      flex: 1,
      alignItems: 'center',
      justifyContent: "flex-start"
    },

    text: {
      textAlign:"center",
      justifyContent:'center'
    },

    top: {
      flexDirection:'row'
    },

    bottom: {
      flexDirection:'row',
      flex:1, 
      alignItems:'stretch',
      justifyContent:'center'
    }
    

})