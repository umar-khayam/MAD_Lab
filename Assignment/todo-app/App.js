import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  let [name,setname]=useState(['a','b','c'])

  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
