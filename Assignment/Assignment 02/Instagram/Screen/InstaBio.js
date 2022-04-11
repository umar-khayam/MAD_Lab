import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

export default function InstaBio() {
  return (
    <View style={{flex:1}}>
       <View style={{width:'100%', height:'10%',backgroundColor: '#EFEFEF', flexDirection:'row',alignItems:'flex-end', borderEndColor:'black', borderWidth:.4

}}>
        <View style={{flex:.333, alignItems:'flex-start', paddingStart:30, paddingBottom:4}}>
        <Image style={{width:20, height:20}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/icons8-camera-50.png')}></Image>
        </View>

        <View style={{flex:.333, alignItems:'center', paddingBottom:6}}>
        <Image style={{width:90, height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Logo.png')}></Image>
        </View>

        <View style={{flex:.333, alignItems:'flex-end', paddingEnd:30, paddingBottom:6}}>
            <Image style={{width:20, height:20}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/icons8-email-send-48.png')}></Image>
        </View>
        
      </View>

      <View style={{margin:'2%', flexDirection:'row'}}>
          <View style={{marginLeft:'5%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Umar.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Umar</Text>
          </View>

          <View style={{marginLeft:'3%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a1.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Raju</Text>
          </View>

          <View style={{marginLeft:'3%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a2.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Motia</Text>
          </View>

          <View style={{marginLeft:'3%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a3.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Kaka</Text>
          </View>

          <View style={{marginLeft:'3%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a4.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Langra</Text>
          </View>

      </View>

      <View style={{flexDirection:'row', marginLeft:'2%'}}>
          <View style={{marginLeft:'5%', flex:.33}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C76D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a3.png')}></Image>
          </View>

          <View style={{marginLeft:'5%', justifyContent:'center',  flex:.33, marginRight:30}}>
            <Text style={{fontSize:15,textAlign:'left'}}>Umar</Text>
          </View>


          <View style={{ alignItems:'flex-end', justifyContent:'flex-end', flex:.33, marginRight:20}}>
            <Image style={{width:30, height:30 }} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/icons8-ellipsis-50.png')}></Image>
          </View>
      </View>

      <View style={{ }}>
          <View style={{}}>
            <Image style={{width:'100%', height:200, marginTop:10}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/dash1.png')}></Image>
          </View>
          
      </View>

      <View  style={{flexDirection:'row', marginTop:5, height:'10%', marginLeft:'7%', width:'100%'}}>
            <View style={{flexDirection:'row', flex:.5,}}>
                <View style={{}}>
                    <Image style={{width:30, height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/heart.png')}></Image>
                </View>

                <View style={{marginLeft:10}}>
                    <Image style={{width:30, height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Message.png')}></Image>
                </View>

                <View style={{marginLeft:10}}>
                    <Image style={{width:30, height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/icons8-email-send-48.png')}></Image>
                </View>
            </View>
            <View style={{ flex:.5, alignContent:'flex-end', marginLeft:240}}>
                <Image style={{width:30, height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/bookmark.png')}></Image>
            </View>
              
              
              
              
          </View>

      <View>
          <View style={{marginLeft:20, marginTop:0}}>
              <Text style={{textAlign:'left'}}>236 Likes</Text>
          </View>
          <View style={{marginLeft:20,marginTop:10}}>
              <Text style={{textAlign:'left'}}>Umar</Text>
          </View>
          <View style={{marginLeft:20, marginTop:10}}>
              <Text style={{textAlign:'left'}}>Everything matter</Text>
          </View>
          
      </View>
      <View style={{ flexDirection:'row', height:100, paddingBottom:10}}>
          
            <View style={{justifyContent:'flex-end', marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Home.png')}></Image>
                    
            </View>

            <View style={{justifyContent:'flex-end', marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/search.png')}></Image>
                    
            </View>

            <View style={{justifyContent:'flex-end', marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/add.png')}></Image>
                    
            </View>

            <View style={{justifyContent:'flex-end', marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/heart.png')}></Image>
                    
            </View>

            <View style={{justifyContent:'flex-end', marginLeft:20,flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/setting.png')}></Image>
                    
            </View>
            
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})