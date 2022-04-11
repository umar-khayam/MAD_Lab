import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={{flex:1}}>
      <View style={{width:'100%', height:'10%',backgroundColor: '#EFEFEF', flexDirection:'row',alignItems:'flex-end', borderEndColor:'black', borderWidth:.4

}}>
        <View style={{flex:.333, alignItems:'flex-start', paddingStart:30, paddingBottom:6}}>
          <Text > Cancel</Text>
        </View>

        <View style={{flex:.333, alignItems:'center', paddingBottom:6}}>
          <Text > Umar Khayam</Text>
        </View>

        <View style={{flex:.333, alignItems:'flex-end', paddingEnd:30, paddingBottom:3}}>
          <Image style={{width:30, height:30}}source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/icons8-ellipsis-50.png')}></Image>
        </View>
        
      </View>

      <View style={{flexDirection:'row', margin:'5%'}}>
        <View style={{flex:.3}}>
            <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C36D6D', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Umar.png')}></Image>
        </View>

        <View style={{flex:.7, flexDirection:'row'}}>
            <View style={{flex:.33}}>
                <Text>545</Text>
                <Text>Posts</Text>
            </View>

            <View style={{flex:.33}}>
                <Text>23.5k</Text>
                <Text>Followers</Text>
            </View>

            <View style={{flex:.33}}>
                <Text>15</Text>
                <Text>Following</Text>
            </View>
        </View>

      </View>

      <View style={{marginLeft:20, marginRight:20}}>
            <View style={{marginTop:5}}>
                <Text>
                    Umar Khayam
                </Text>
            </View>

            <View style={{marginTop:2}}>
                <Text>
                    A student at Comsats.
                </Text>
            </View>

            <View style={{marginTop:2}}>
                <Text>
                    6th Semester
                </Text>
            </View>

            <View style={{marginTop:2}}>
                <Text style={{color:'#8888E6'}}>
                    A Data Scientist, doing freelancing. Making Instagram clone for react-native practice.
                </Text>
            </View>
        </View>

        <View style={{margin:20, flexDirection:'row' }}>
            <View style={{justifyContent:'center',width:70, height:30, alignItems:'center', borderColor:'#C0C0C0', borderWidth:1.8,backgroundColor:'#8888E6'}}>
                <Text style={{textAlign:'center', color:'white'}}> Follow</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center',width:70, marginLeft:20,height:30,borderColor:'#C0C0C0', borderWidth:1.8}}>
                <Text style={{textAlign:'center'}}> Message</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', width:70,borderRadius:5 ,marginLeft:20, height:30, borderColor:'#C0C0C0', borderWidth:1.8}}>
                <Text style={{textAlign:'center'}}> Contact</Text>
            </View>
        </View>

        <View style={{margin:'2%', flexDirection:'row'}}>

          <View style={{marginLeft:'3%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C0C0C0', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a1.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Raju</Text>
          </View>

          <View style={{marginLeft:'7%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C0C0C0', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a2.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Motia</Text>
          </View>

          <View style={{marginLeft:'7%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C0C0C0', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a3.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Kaka</Text>
          </View>

          <View style={{marginLeft:'7%'}}>
              <Image style={{width:60, height:60, borderRadius:100, borderColor:'#C0C0C0', borderWidth:1.8}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/a4.png')}></Image>
              <Text style={{fontSize:10, textAlign:'center'}}>Langra</Text>
          </View>
      </View>

      <View style={{backgroundColor:'#EFEFEF'}}>
        <View style={{ height: 1.5, width:'100%', backgroundColor: '#C0C0C0'}}>

        </View>

        <View style={{flexDirection:'row',marginTop:5}}>
            <View style={{flex:.333, alignItems:'center' }}>
            <Image style={{width:30, height:30}}source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Message.png')}></Image>
            </View>

            <View style={{flex:.333, alignItems:'center'}}>
            <Image style={{width:30, height:30}}source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Home.png')}></Image>
            </View>

            <View style={{flex:.333, alignItems:'center'}}>
            <Image style={{width:30, height:30}}source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/heart.png')}></Image>
            </View>
        </View>

        <View style={{marginTop:5, height: 1.5, width:'100%', backgroundColor: '#C0C0C0'}}>

        </View>
      </View>

      <View style={{flex:1, justifyContent:'flex-end', height:100, paddingBottom:10}}>
          <View style={{flexDirection:'row'}}>
          <View style={{ marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/Home.png')}></Image>
                    
            </View>

            <View style={{ marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/search.png')}></Image>
                    
            </View>

            <View style={{ marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/add.png')}></Image>
                    
            </View>

            <View style={{ marginLeft:20, flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/heart.png')}></Image>
                    
            </View>

            <View style={{ marginLeft:20,flex:2}}>
                <Image style={{height:30, width:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/Instagram/Images/setting.png')}></Image>
                    
            </View>
          </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})