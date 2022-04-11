import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'

export default function SiginMain() {
  return (
    <View style={styles.body}>
        <View style={styles.logo}>
                <Image style={{height:80, width:220}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Logo.png')}></Image>
        </View>
        <View style={{ marginTop:30}}>
            <View style={{backgroundColor: '#EA50BFA3', height:50, width:300, padding:15,marginTop:10}}>
                <TextInput style={{color:'white', textAlign:'left' }}>Username</TextInput>
            </View>

            <View style={{backgroundColor: '#EA50BFA3', height:50, width:300, padding:15,marginTop:10}}>
                <TextInput style={{color:'white', textAlign:'left',}}>Password</TextInput>
            </View>

            <View style={{backgroundColor: '#EA50BFA3', height:50, width:300, padding:15, marginTop:10}}>
                <Text style={{color:'white', textAlign:'center' }}>Login</Text>
            </View>

            <View style={{alignItems:'center',marginTop:20,flexDirection:'row', justifyContent:'center',marginBottom:20}}>
                <Text style={{fontSize:9, color:'white',textAlign:'center'}}>
                Forget your login details?
                </Text>
                <Text style={{paddingLeft:5,fontSize:10, color:'white',fontWeight:'800'}}>
                Get help signing in.
                </Text>
            </View>

            <View style={{alignItems:'center',justifyContent:'center', marginTop:30, flexDirection:'row'}}>
                <View style={{ height: 1.5, width:120, backgroundColor: 'white'}}></View>
                <View ><Text style={{paddingLeft:15,color:'white', paddingRight:15, fontSize:18}}>OR</Text></View>
                <View style={{ height: 1.5, width:120, backgroundColor: 'white'}}></View>
            </View>

            <View style={{marginTop:25}}>
                <View style={{height:45, width:270, alignContent:'center', justifyContent:'center',alignItems:'center',flexDirection:'row', borderRadius:5}}>
                    <Image style={{width:30, height:25}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Facebook.png')}>
                    </Image>
                    <Text style={{paddingLeft:20, color:'white'}}>
                            Log into Facebook
                    </Text>
                </View>
                
            </View>
       
        </View>
        
    


        <View style={{flex:1, justifyContent:'flex-end', height:100}}>
            <View style={{ height: 1.5, width:400, backgroundColor: 'white'}}></View>
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
    body: {flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#D84DB9'},
    logo: {
        marginTop:100,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },
})