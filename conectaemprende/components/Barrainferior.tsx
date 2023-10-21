import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { IconButton, PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

function Barrainferior() {
  
const navigation = useNavigation();
  const chatScreen = () => {
    navigation.navigate('ChatS'); // Navega a la vista 'Screen2'
  };
  const HomeScreen = () => {
    navigation.navigate('HomeScreen'); // Navega a la vista 'Screen2'
  };

    return (
    <View style={[styles. barracontainer]}>
    <View style={[styles.iconcontain]}>
    <View style={[styles.textoicono]}>
      <IconButton
        icon="home-outline"
        iconColor='black'
        size={35}
        onPress={HomeScreen}
      />
      <Text style={[styles.textoinferior]}>Home</Text>
    </View>

    <View style={[styles.textoicono]}>
      <IconButton
        icon="bookmark-outline"
        iconColor='black'
        size={35}
        onPress={() => console.log('carajo')}
      />
      <Text style={[styles.textoinferior]}>Products</Text>
    </View>
    <View style={[styles.textoicono]}>
      <IconButton
        icon="calendar-month"
        iconColor='black'
        size={35}
        onPress={() => console.log('carajo')}
      />
      <Text style={[styles.textoinferior]}>Calendary</Text>
    </View>

    <View style={[styles.textoicono]}>
      <IconButton
        icon="comment-processing-outline"
        iconColor='black'
        size={35}
        onPress={chatScreen}
      />
      <Text style={[styles.textoinferior]}>Chat</Text>
    </View>
    <View style={[styles.textoicono]}>
      <IconButton
        icon="book"
        iconColor='black'
        size={35}
        onPress={() => console.log('carajo')}
      />
      <Text style={[styles.textoinferior]}>Library</Text>
    </View>
  </View>
  </View>
  );
}
const styles = StyleSheet.create({
      barracontainer: {
        position: 'absolute',
        bottom:15,
        height: 90,
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',  
      },
      iconcontain: {
        width: '90%',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around',
      },
      textoicono: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
      },
      textoinferior: {
        fontSize: 14,
        fontWeight: '400',
        color: '#0F0F0F',
    
      },
});




