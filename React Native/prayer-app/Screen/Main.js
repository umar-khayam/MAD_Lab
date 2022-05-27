import { StyleSheet, Text, View, Pressable, Button, TouchableOpacity, Image, Modal} from 'react-native'

import React, {useState} from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import SwitchToggle from "react-native-switch-toggle";
import {   Picker } from 'react-native-web';
import { Switch } from 'react-native-switch';


    
export default function Main({navigation}) {
  const [Date, setDate]=useState('')
  const [Fajjar, setFajjar]=useState(false)
  const [Zohar, setZohar]=useState(false)
  const [Asar, setAsar]=useState(false)
  const [Magrib, setMagrib]=useState(false)
  const [Isha, setIsha]=useState(false)
  const [chooseData, setchooseData]=useState('')
  const [isModeVisible, setisModeVisible]=useState('')
  const [togleCheck, settogleCheck]=useState(false)

  const OnPressHandler=()=>{
    navigation.navigate('Stats')
  }

  const getCurrentDate=()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    return (year + '-' + month + '-' + date).toString()
  }

 
  const toggleSwitchFajr = () => setFajjar(previousState => !previousState);
   
  const toggleSwitchZhor = () => setZohar(previousState => !previousState);
   
  const toggleSwitchAsr = () => setAsar(previousState => !previousState);

  const toggleSwitchMaghrib = () => setMagrib(previousState => !previousState);
   
  const toggleSwitchIsha = () => setIsha(previousState => !previousState);
  

  return (
    <View style={styles.container}>
      <View style={{height:130}}>
        <CalendarStrip
          scrollable
          style={{height:130, paddingTop: 50, paddingBottom: 5}}
          calendarColor={'#36454f'}
          calendarHeaderStyle={{color:'white', fontSize:17}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
          maxDate={{getCurrentDate}}
        />
      </View>
      
      <View  style={{backgroundColor:'#0E2F44', flex:1}}>
        <View style={{margin:20, marginTop:30}}>
          <View style={{alignItems:'baseline'}}>
          <Text style={{color:'white', fontSize:13, alignItems:'baseline'}}>PRAYERS</Text>
         
          </View>
          
          <TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:7, backgroundColor:'#36454f', height:60, alignItems:'center'}}>
              <View style={{width:65}}>
              <Image style={{height:55, width:55, marginLeft:15}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/moon.png')}></Image>
              </View>
              
              <View style={{flexDirection:'row',width:'75%', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, color:'white', marginLeft:20}}>Fajr</Text>
              <Text style={{fontSize:20, color:'white', textAlign:'right', marginRight:15}}></Text>
              <Switch
                activeText={'Yes'}
                inActiveText={'Not'}
                backgroundActive={'#36454f'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={Fajjar ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchFajr}
                value={Fajjar}
                circleSize={20}
                circleBorderWidth={3}
              />
              </View>
            </View>
          </TouchableOpacity>
      

          <TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:7, backgroundColor:'#36454f', height:60, alignItems:'center'}}>
              <View style={{width:65}}>
              <Image style={{height:55, width:55, marginLeft:15}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/sun.png')}></Image>
              </View>
              
              <View style={{flexDirection:'row',width:'75%', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, color:'white', marginLeft:20}}>Dhuhr</Text>
              <Text style={{fontSize:20, color:'white', textAlign:'right', marginRight:15}}></Text>
              <Switch
                activeText={'Yes'}
                inActiveText={'Not'}
                backgroundActive={'#36454f'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={Zohar ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchZhor}
                value={Zohar}
                circleSize={20}
                circleBorderWidth={3}
              />
              </View>
              
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:7, backgroundColor:'#36454f', height:60, alignItems:'center'}}>
              <View style={{width:65}}>
              <Image style={{height:55, width:55, marginLeft:15}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/sundown.png')}></Image>
              </View>
              
              <View style={{flexDirection:'row',width:'75%', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, color:'white', marginLeft:20}}>Asr</Text>
              <Text style={{fontSize:20, color:'white', textAlign:'right', marginRight:15}}></Text>
              <Switch
                activeText={'Yes'}
                inActiveText={'Not'}
                backgroundActive={'#36454f'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={Asar ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchAsr}
                value={Asar}
                circleSize={20}
                circleBorderWidth={3}
              />
              </View>
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:7, backgroundColor:'#36454f', height:60, alignItems:'center'}}>
              <View style={{width:65}}>
              <Image style={{height:55, width:55, marginLeft:15}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/sunset.png')}></Image>
              </View>
              
              <View style={{flexDirection:'row',width:'75%', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, color:'white', marginLeft:20}}>Maghrib</Text>
              <Text style={{fontSize:20, color:'white', textAlign:'right', marginRight:15}}></Text>
              <Switch
                activeText={'Yes'}
                inActiveText={'Not'}
                backgroundActive={'#36454f'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={Magrib ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchMaghrib}
                value={Magrib}
                circleSize={20}
                circleBorderWidth={3}
              />
              </View>
              
            </View>
          </TouchableOpacity> 

          <TouchableOpacity 
          >
            <View style={{flexDirection:'row',marginTop:7, backgroundColor:'#36454f', height:60, alignItems:'center'}}>
              <View style={{width:65}}>
              <Image style={{height:55, width:55, marginLeft:15}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/night.png')}></Image>
              </View>
              
              <View style={{flexDirection:'row',width:'75%', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, color:'white', marginLeft:20}}>Isha</Text>
              <Switch
                activeText={'Yes'}
                inActiveText={'Not'}
                backgroundActive={'#36454f'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={Isha ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchIsha}
                value={Isha}
                circleSize={20}
                circleBorderWidth={3}
                style={{}}
              />
              </View>
            </View>
          </TouchableOpacity>
          

         
        </View>
      </View>
      
      
    </View>
  )


}
const styles = StyleSheet.create({
  container: { flex: 1 },
  
})


