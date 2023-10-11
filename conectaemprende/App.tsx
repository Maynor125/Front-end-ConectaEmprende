import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Welcome from './welcome';
import { StatusBar } from 'react-native';
import Login from './Login';

const Stack = createNativeStackNavigator();




export default function App() { 
    return (
      useEffect(() => {
        setTimeout(() => {
          BootSplash.hide({ fade: true });
        }, 1000);
      }, []),
    <NavigationContainer>
      <StatusBar animated={true}
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent={true} />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

