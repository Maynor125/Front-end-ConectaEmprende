import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Welcome from './welcome';
import { StatusBar } from 'react-native';
import Login from './Login';
import Registro from './Registro';
import Cperfil from './Cperfil';
import ChatS from './ChatS';
import Chat from './Chat';
import ChatWelcome from './ChatWelcome';
import MisChat from './MisChat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Biblioteca from './Biblioteca';
import Foro from '../components/Foro';
import Productos from './Productos';
import { IconButton } from 'react-native-paper';
import { lightBlueA700 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Calendario from './Calendario';
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home" screenOptions={{ headerShown: false ,tabBarStyle:{height: 90, paddingBottom: 30, backgroundColor: 'white'}}} 
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home', tabBarLabelStyle: { fontSize: 14, color: 'black'},
          tabBarIcon: ({ }) => (
            <IconButton icon="home-outline" size={35} iconColor='black' />
          )
        }}
      />
      <Tab.Screen
        name="Productos"
        component={Productos}
        options={{
          tabBarLabel: 'Products', tabBarLabelStyle: { fontSize: 14, color: 'black' },
          tabBarIcon: ({ }) => (
            <IconButton icon="bookmark-outline" size={35} iconColor='black' />
          )
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarLabel: 'Calendario', tabBarLabelStyle: { fontSize: 14, color: 'black' },
          tabBarIcon: ({ }) => (
            <IconButton icon="calendar-month" size={35} iconColor='black' />
          )
        }}
      />
      <Tab.Screen
        name="ChatS"
        component={ChatS}
        options={{
          tabBarLabel: 'ChatS', tabBarLabelStyle: { fontSize: 14, color: 'black' },

          tabBarIcon: ({ }) => (
            <IconButton icon="comment-processing-outline" size={35} iconColor={'black'} />
          )
        }}
      />
      <Tab.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          tabBarLabel: 'Library', tabBarLabelStyle: { fontSize: 14, color: 'black', fontWeight: '600' },

          tabBarIcon: ({ }) => (
            <IconButton icon="book" size={35} iconColor={'black'} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    useEffect(() => {
      setTimeout(() => {
        BootSplash.hide({ fade: true });
      }, 1000);
    }, []),

    <NavigationContainer >
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={"dark-content"}
      />
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, contentStyle:  { backgroundColor: "white" } }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "white" } }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="HomeScreen" component={TabNavigation} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
       
       
        <Stack.Screen name="CompletePerfil" component={Cperfil} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
        <Stack.Screen name="Calendario" component={Calendario} />

        <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="MisChat" component={MisChat} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
       
      </Stack.Navigator>
    </NavigationContainer>


  );
}

