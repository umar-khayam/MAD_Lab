import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function Signup() {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
          <Text style={styles.bold}>Welcome Back</Text>
          <Text style={styles.text}>The copy feature lorem-ipsum-react-native.js on Linux. The feature will work out of the box on Mac and Windows systems.</Text>
      </View>
      
      <View style={styles.center}>
        <TextInput style={styles.username} placeholder='Username , Email & Phone Numebr'></TextInput>
        <TextInput style={styles.username} placeholder='Password'></TextInput>
        <Text style={styles.forget}>Forget Password?</Text>
      </View>
      <View>
        <Text style={styles.signin}>Sign in</Text>
        <Text style={styles.signup}>Or Sign up With</Text>
      </View>

      <View style={{flexDirection:'row' ,justifyContent:'center'}}> 
        <View style={styles.icon}><Image source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/login-screen-design/Images/Googlelogo.png')}></Image></View>
        <View style={styles.icon}><Image source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/login-screen-design/Images/Facbook.png')}></Image></View>
        <View style={styles.icon}><Image source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/login-screen-design/Images/Group.png')}></Image></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      flex:1,
  },

    top: {
      overflow:'hidden',
      width:'89%',
      height:'20%',
      alignContent:'center',
      justifyContent: 'center',
      margin: 20,
      marginTop:40,
      
  },

    center: {
      alignContent:'center',
      justifyContent: 'center'
  },

  bold: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign:'center',
      textAlignVertical:'center'
  },

  text: {
      textAlign:'center',
      paddingTop:15,
      paddingLeft:30,
      paddingRight: 30,
  },

  center: {
    alignContent:'center',
    justifyContent: 'center'
  },

  username: {

    textAlign:'left',
    backgroundColor:'#dcdcdc',
    marginTop:5,
    marginLeft:20,
    marginRight:20,
    paddingVertical:12,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    paddingLeft:10
  },

  forget: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop:4,
    margin:20,
    textAlign:'right'
  },

  signin: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:4,
    color:'white',
    margin:20,
    textAlign:'center',
    backgroundColor:'#ee82ee',
    paddingVertical:12,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
  },

  signup: {
    marginTop:3,
    margin:20,
    textAlign:'center',
  },

  bottom: {
    flexDirection:'row',
  },

  icon: {
    margin:6,
    backgroundColor:'#dcdcdc',
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderColor:'#ee82ee',
    borderWidth:.5
  }

})