import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
          <Image style={styles.image} source={require('/Users/khayam/Desktop/abc/React-Native/MAD_Lab/React Native/login-screen-design/Images/Saly-1intro-image.png')}>
          </Image>
      </View>
      <View style={styles.center}>
          <Text style={styles.bold}>Discover Your</Text>
          <Text style={styles.bold}>Own Dream House</Text>
          <Text style={styles.text}>The copy feature requires that you have xclip installed if you are using lorem-ipsum-react-native.js on Linux. The feature will work out of the box on Mac and Windows systems.</Text>
      </View>
      <View style={styles.bottom}>
          <View style={{borderRadius:10}}><Text style={styles.signup}>Signup</Text></View> 
          <Text style={styles.register}>Register</Text>
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
        height:'55%',
        backgroundColor: '#ee82ee',
        alignContent:'center',
        justifyContent: 'center',
        margin: 20,
        marginTop:25,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        borderTopLeftRadius:35,
        borderTopRightRadius:35
    },

    image: {
        height:'100%',
        width: '100%'
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
        paddingRight: 30
    },

    bottom: {
        flexDirection: 'row',
        alignContent:'center',
        justifyContent: 'center',
        marginTop:30,
    },

    signup: {
        backgroundColor:'#ee82ee',
        color:'white',
        fontSize:15,
        justifyContent:'center',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        fontWeight: 'bold'

    },

    register: {
        backgroundColor:'#dcdcdc',
        fontSize:15,
        justifyContent:'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopEndRadius:10,
        borderBottomRightRadius:10,
        fontWeight: 'bold'
       
    }

})