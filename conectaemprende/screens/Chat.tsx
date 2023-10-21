import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View,StatusBar,} from 'react-native';
import {IconButton, Text, TextInput, Button} from 'react-native-paper';
import FormBuilder from 'react-native-paper-form-builder';
import Mensaje from '../components/Mensaje';

const Chat = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <>
    <View style={[styles.container]}>
      <Text variant="titleLarge" style={[styles.encabezado]}>
        Gestion de redes sociales
      </Text>
      <View style={[styles.fechacont]}>
        <IconButton
          icon={'chevron-left'}
          onPress={() => navigation.navigate('ChatScreens')}
        />
        <Text style={[styles.fechatext]}>Miercoles a las 4:30 PM</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={{height:'72%'}}>
          <Mensaje
              text={'En este foro se abordara la tematica.'} />
          <Mensaje
              text={'En este foro se abordara la tematica de como potenciar el crecimiento.'}/>
          <Mensaje
            text={
              'En este foro se abordara la tematica de como potenciar el crecimiento,  tematica de como potenciar el crecimiento.'
            }
            mio={false}
            picture={require('../assets/Images/Ellipse2.png')}
            masdeuno={true}
          />
          <Mensaje
            text={
              'En este foro se abordara la tematica de como potenciar el crecimiento,  tematica de como potenciar el crecimiento.'
            }
            mio={true}
            picture={require('../assets/Images/Ellipse3.png')}
            masdeuno={true}
          />
          <Mensaje
            text={
              'En este foro se abordara la tematica de como potenciar el crecimiento,  tematica.'
            }
            mio={true}
            picture={require('../assets/Images/Ellipse2.png')}
            masdeuno={true}
          />
        </ScrollView>
      </SafeAreaView>
      <View style={[styles.form]}>
        <IconButton
          icon="attachment"
          iconColor="#797979"
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <TextInput
          style={[styles.caja]}
          label="Escribe un mensaje "
          value={text}
          mode="outlined"
          outlineColor="#797979"
          onChangeText={text => setText(text)}
        />
        <IconButton
          icon="send"
          iconColor={'#fff'}
          size={20}
          mode="contained"
          containerColor="#5A256F"
          onPress={() => console.log('Pressed')}
          style={{borderRadius:5,height:50,width:50,marginTop:10}}
        />
      </View>
    </View>
    </>
  );
};

/* aquie estaran los estilos */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  containermsj: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  encabezado: {
    textAlign: 'center',
    color: '#371B34',
    marginTop: 10,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  caja: {
    width: '70%',
  },
  btnenviar: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  fechacont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  fechatext: {
    marginLeft: 60,
  },
});

export default Chat;
