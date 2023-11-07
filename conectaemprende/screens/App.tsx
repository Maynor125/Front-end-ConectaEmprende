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
import Productos from './Productos';
import { IconButton } from 'react-native-paper';
import Eventos from './Eventos';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen" screenOptions={{ headerShown: false, tabBarStyle: { height: 90, paddingBottom: 30 } }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home', tabBarLabelStyle: { fontSize: 14, color: 'black' },
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
        name="Eventos"
        component={Eventos}
        options={{
          tabBarLabel: 'Calendary', tabBarLabelStyle: { fontSize: 14, color: 'black' },
          tabBarIcon: ({ }) => (
            <IconButton icon="calendar-month" size={35} iconColor='black' />
          )
        }}
      />
      <Tab.Screen
        name="ChatS"
        component={ChatS}
        options={{
          tabBarLabel: 'Chats', tabBarLabelStyle: { fontSize: 14, color: 'black' },
          tabBarIcon: () => (
            <IconButton icon="comment-processing-outline" size={35} iconColor={'black'} />
          )
        }}
      />
      <Tab.Screen
        name="ChatWelcome"
        component={ChatWelcome}
        options={{
          tabBarLabel: 'Library', tabBarLabelStyle: { fontSize: 14, color: 'black', fontWeight: '600' },

        tabBarIcon: () => (
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
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="ChatS" component={ChatS}/>
        <Stack.Screen name="MisChat" component={MisChat}/>
        <Stack.Screen name="Chat" component={Chat} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "white" } }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="ChatWelcome" component={ChatWelcome} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />


        <Stack.Screen name="CompletePerfil" component={Cperfil} options={{ title: '', headerShown: false, contentStyle: { backgroundColor: "rgba(255, 255, 255, 1)" } }} />
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
        <Stack.Screen name="Eventos" component={Eventos} />

        <Stack.Screen name="Productos" component={Productos} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

