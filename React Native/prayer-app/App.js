import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Main from './Screen/Main';
import Setting from './Screen/Setting';
import Stats from './Screen/Stats';

export default function App() {
  //const Stack=createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarStyle: {
        backgroundColor: '#36454f'
        
        
      }, 
      headerStyle: {
        height: 80,
        backgroundColor:'#36454f',
        
        
         // Specify the height of your custom header
      },
      
   })}>
        <Tab.Screen options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={
                    require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/bar.png')
                  }
                />
              );
            }, headerShown: false }} name="Home" component={Main}/>
        <Tab.Screen options={{tabBarIcon: ({size,focused,color}) => {
          
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={
                    require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/stats.png')
                  }
                />
              );
            }, headerTintColor: '#fff'}} name="Stats" component={Stats} />
        <Tab.Screen options={{tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={
                    require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/prayer-app/Images/setting.png')
                  }
                />
              );
            }, headerTintColor: '#fff'}} name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

