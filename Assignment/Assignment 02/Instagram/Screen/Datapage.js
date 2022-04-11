import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

export default function Datapage() {
  return (
    <View style={{flex:1}}>
     
      <View style={{width:'100%', height:'10%',backgroundColor: '#EFEFEF', flexDirection:'row',alignItems:'flex-end', borderEndColor:'black', borderWidth:.4

}}>
        <View style={{flex:.333, alignItems:'flex-start', paddingStart:30, paddingBottom:6}}>
          <Text > Cancel</Text>
        </View>

        <View style={{flex:.333, alignItems:'center', paddingBottom:6}}>
          <Text > Edit Profile</Text>
        </View>

        <View style={{flex:.333, alignItems:'flex-end', paddingEnd:30, paddingBottom:6}}>
          <Text style={{color:'#00B5FF'}}> Done</Text>
        </View>
        
      </View>

      <View style={{width:'100%', height:'51%', paddingTop:20}}>
        <View style={{alignItems:'center'}}>
          <Image style={{width:100, height:100, borderRadius:100, borderWidth:.4}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Umar.png')} ></Image>
          <Text style={{padding:10, fontSize:13, color:'#00B5FF'}}>Change profile photo</Text>
          <View style={{width:'90%', alignItems:'center', height:2, backgroundColor:'#EFEFEF'}}></View>
        </View>
        
        <View>
          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Name
            </Text>
            <TextInput placeholder='Name' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:60, width:'63%', height:20}}>

            </TextInput>
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Username
            </Text>
            <TextInput placeholder='Username' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:30, width:'63%', height:20}}>

            </TextInput>
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Website
            </Text>
            <TextInput placeholder='Website' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:45, width:'63%', height:20}}>

            </TextInput>
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Bio
            </Text>
            <TextInput placeholder='Bio' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:77, width:'63%', height:20}}>

            </TextInput>
          </View>
        </View>
        <View style={{width:'90%', alignItems:'center', marginTop:15,height:2, backgroundColor:'#EFEFEF', marginLeft:'5%'}}></View>
      </View>

      <View>
        <View style={{alignItems:'left', marginLeft:30}}>
          <Text style={{color: '#00B5FF'}}>
            Swtich to prefesional account
          </Text>
        </View>
        <View style={{width:'90%', alignItems:'center', justifyContent:'center', marginTop:10,height:2, backgroundColor:'#EFEFEF', marginLeft:'5%'}}></View>

        <View style={{alignItems:'left', marginLeft:30, marginTop:15}}>
        
          <Text style={{ fontSize:19}}>
            Private Information
          </Text>
        </View>

          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Email
            </Text>
            <TextInput placeholder='Email' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:65, width:'63%', height:20}}>

            </TextInput>
          </View>

          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
            Phone
            </Text>
            <TextInput placeholder='Phone' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:60, width:'63%', height:20}}>

            </TextInput>
          </View>

          <View style={{flexDirection:'row', marginTop:20, marginLeft:30}}>
            <Text>
              Gender
            </Text>
            <TextInput placeholder='Gender' style={{borderBottomColor:'#EFEFEF', borderWidth:1.8, borderColor:'white', marginLeft:51, width:'63%', height:20}}>

            </TextInput>
          </View>
      </View>
      


    </View>
  );
}

const styles = StyleSheet.create({
    
})