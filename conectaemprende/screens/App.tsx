import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Welcome from './welcome';
import { StatusBar} from 'react-native';
import Login from './Login';
import Registro from './Registro';
import Cperfil from './Cperfil';

const Stack = createNativeStackNavigator();




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
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: '', headerShown: false, contentStyle:{backgroundColor: "white" }}}/>
        <Stack.Screen name="Registro" component={Registro} options={{title: '', headerShown: false, contentStyle:{backgroundColor: "rgba(255, 255, 255, 1)"}}}/>
        <Stack.Screen name="Login" component={Login} options={{title: '', headerShown: false, contentStyle:{backgroundColor: "rgba(255, 255, 255, 1)"}}}/>
        <Stack.Screen name="CompletePerfil" component={Cperfil} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

