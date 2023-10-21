import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Foro from '../components/Foro';
import Iconnavbar from '../components/Iconnavbar';
import Barrainferior from '../components/Barrainferior';
import { useNavigation } from '@react-navigation/native';

const MisChat = () => {
  const navigation = useNavigation();

  const ChatS = () =>{
    navigation.navigate('ChatS');
  }


  return (
    <> <Iconnavbar></Iconnavbar>
      <View style={[styles.container]}>
        <View style={[styles.cabecera]}>
          <IconButton
            icon={'chevron-left'}
            onPress={ChatS}
          />
          <Text variant="titleLarge">Foros de apredizaje guardados</Text>
        </View>
        <ScrollView>
          <Foro title='Gestion de redes sociales.' picture={require('../assets/Images/Ellipse2.png')} text='Is there a therapy which can cure crossdressing & bdsm compulsion?' />
          <Foro title='Aplicacion de la tecnologia' picture={require('../assets/Images/Ellipse2.png')} text='Is there a therapy which can cure crossdressing & bdsm compulsion?' />
          <Foro title='Como llegar a mas personas' picture={require('../assets/Images/Ellipse3.png')} text='Is there a therapy which can cure crossdressing & bdsm compulsion?' />
          <Foro title='Como llegar a mas personas' picture={require('../assets/Images/Ellipse3.png')} text='Is there a therapy which can cure crossdressing & bdsm compulsion?' />
          <Foro title='Como llegar a mas personas' picture={require('../assets/Images/Ellipse3.png')} text='Is there a therapy which can cure crossdressing & bdsm compulsion?' />
        </ScrollView>
        <IconButton
          style={[styles.botonflotante]}
          icon="plus"
          iconColor={'#fff'}
          size={40}
          mode='contained'
          onPress={ChatS}
        />
      </View>
      <Barrainferior></Barrainferior>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 10,
  },
  botonflotante: {
    shadowRadius: 15,
    position: 'absolute',
    bottom: 50,
    right: '46%',
    backgroundColor: '#5A256F'
  },
  cabecera: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
export default MisChat;
