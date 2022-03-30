import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { TextInput } from 'react-native'

export default function NetflixLogin() {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Image style={{
        width:50,
        height:60,
      }}
      source={require("/Users/khayam/Desktop/abc/React-Native/MAD_Lab/React Native/welcome-screen/assets/favicon.png")}></Image>
    </View>
    <View style={{width:"80%"}}>
    <TextInput style={{backgroundColor:"white", padding:10, paddingHorizontal:15, paddingVertical:10,marginTop:5}}>Email:</TextInput>
    <TextInput>Email:</TextInput>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:"center",
    alignItems:"center",
  }
})