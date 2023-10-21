import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, IconButton, Button} from 'react-native-paper';
import Foro from '../components/Foro';
import Iconnavbar from '../components/Iconnavbar';
import { useNavigation } from '@react-navigation/native';

function ChatS ({navigation}) {

  return (
    <>
    <Iconnavbar></Iconnavbar>s
    <View style={[styles.container]}>
      <Text style={{ marginTop: 15 }} variant="titleMedium">Foros de aprendizaje </Text>
      <View style={[styles.contbtns]}>
        <Button mode="contained" style={{ borderRadius: 5, backgroundColor: '#5A256F' }}
        >Trending</Button>
        <Button mode="contained" style={{ borderRadius: 5, backgroundColor: '#F4F2F1' }}
          textColor='#8A8A8A'
        >Relationship</Button>
        <Button mode="contained" style={{ borderRadius: 5, backgroundColor: '#F4F2F1', }}
          textColor='#8A8A8A'
        >Self Care</Button>
      </View>
      <ScrollView style={[styles.scroll]}>
        <Foro title ='Gestion de redes sociales' picture={require('../assets/Images/Ellipse2.png')}  text = 'Is there a therapy which can cure crossdressing & bdsm compulsion?'/>
        <Foro title ='Aplicacion de la tecnologia' picture={require('../assets/Images/Ellipse3.png')} text = 'Is there a therapy which can cure crossdressing & bdsm compulsion?'/>
        <Foro title ='Como llegar a mas personas' picture={require('../assets/Images/Ellipse4.png')}  text = 'Is there a therapy which can cure crossdressing & bdsm compulsion?'/>
        <Foro title ='Uso de las  IAS para gestion' picture={require('../assets/Images/Ellipse1.png')} text = 'Is there a therapy which can cure crossdressing & bdsm compulsion?'/>
        <Foro title ='Uso de las  IAS para gestion' picture={require('../assets/Images/Ellipse1.png')} text = 'Is there a therapy which can cure crossdressing & bdsm compulsion?'/>
      </ScrollView>
      <IconButton
        style={[styles.botonflotante]}
        icon="bookmark"
        iconColor={'#fff'}
        size={40}
        mode='contained'
        onPress={() => navigation.navigate('ChatWelcome')}
      />
    </View>
    </>
  );
}

/* aquie estaran los estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  botonflotante: {
    position: 'absolute',
    bottom: 10,
    right: 25,
    backgroundColor: '#5A256F'
  },
  botoninactivo: {
    backgroundColor: '#F4F2F1'
  },
  contbtns: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 20
  },
  scroll:{
    maxHeight: 500,
  }
});

export default ChatS;
