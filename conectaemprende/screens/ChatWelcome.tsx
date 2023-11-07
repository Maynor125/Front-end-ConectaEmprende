import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, IconButton, Text } from 'react-native-paper'
import Iconnavbar from '../components/Iconnavbar'

export default function ChatWelcome() {
  return (
    <> <Iconnavbar/>
      <View style={[styles.container]}>
        <IconButton style={{ position: 'relative', left: 0, marginLeft: -20, }} icon={'chevron-left'} onPress={() => console.log('a')}></IconButton>
        <Image style={[styles.img]} source={require('../assets/Images/personadraw.png')}></Image>
        <View style={[styles.conttext]}>
          <Text style={[styles.title]}>Gestion en redes sociales</Text>
          <Text style={[styles.desc]}>En este foro se abordara la tematica de como potenciar el crecimiento de tus productos o articulos</Text>
        </View>
        <Button style={[styles.btn]} mode='contained' onPress={() => console.log('a')}>Unirse a achat</Button>
      </View>
    </>
  )
};

/* aquie estaran los estilos */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  img: {
    marginTop: 100,
    width: '100%',
    height: 280,
  },
  title: {
    textAlign: 'center',
    color: '#371B34'
  },
  desc: {
    marginTop: 10,
    width: '80%',
    textAlign: 'center',
    lineHeight: 20,
    color: '#000000',
  },
  conttext: {
    marginVertical: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    marginTop: 100,
    backgroundColor: '#5A256F'
  },
});
