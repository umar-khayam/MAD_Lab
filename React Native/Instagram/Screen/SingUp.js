import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function SingUp() {
  return (
    <View style={styles.body}>
      <View style={styles.logo}>
            <Image style={{height:80, width:220}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Logo.png')}></Image>
            <Text style={{fontSize:12, color:'white'}}>Sign Up to see photos and videos from friends</Text>
      </View>
      
      <View style={styles.mid}>
          <View style={{height:45, width:270, backgroundColor:'white', alignContent:'center', justifyContent:'center',alignItems:'center',flexDirection:'row', borderRadius:5}}>
              <Image style={{width:30, height:25}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Facebook.png')}></Image>
                <Text style={{paddingLeft:20, color:'#1976D2'}}>
                        Log into Facebook
                </Text>
          </View>
            
      </View>

      <View style={{alignItems:'center',justifyContent:'center', marginTop:30, flexDirection:'row'}}>
          <View style={{ height: 1.5, width:100, backgroundColor: 'white'}}></View>
          <View ><Text style={{paddingLeft:15,color:'white', paddingRight:15, fontSize:18}}>OR</Text></View>
          <View style={{ height: 1.5, width:100, backgroundColor: 'white'}}></View>
      </View>

      <View style={{alignItems:'center', marginTop:30}}>
          <Text style={{fontSize:17, color:'white'}}>
              Sign Up with Email or Phone
          </Text>
      </View>

      <View style={{flex:1, justifyContent:'flex-end', height:100}}>
            <View style={{ height: 1.5, width:"100%", backgroundColor: 'white'}}></View>
            <View style={{alignItems:'center',marginTop:20,flexDirection:'row', justifyContent:'center',marginBottom:20}}>
                <Text style={{fontSize:17, color:'white', fontSize:16,textAlign:'center'}}>
                Already have an account?
                </Text>
                <Text style={{paddingLeft:5,fontSize:15, color:'white',fontWeight:'800'}}>
                Sign in.
                </Text>
            </View>
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor:'#D84DB9'
    },

    logo: {
        marginTop:100,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },

    mid: {
        marginTop:200,
        justifyContent:'center',
        alignItems:'center'
    }

    
})