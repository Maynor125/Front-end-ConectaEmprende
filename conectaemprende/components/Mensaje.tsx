import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function Mensaje({text, mio, picture, masdeuno}) {
  return (
    <View
      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
        marginLeft: mio ? 50 : 0
      }}>
      <Image
        style={{
          display: mio ? 'none' : 'flex',
          width: 40,
          height: 40,
          marginBottom: 13,
        }}
        source={picture}
      />
      <View>
        <View
          style={{
            backgroundColor: mio ? '#5A256F' : '#F0F2F5',
            borderTopStartRadius: 7,
            borderTopRightRadius: 7,
            borderBottomLeftRadius: mio ? 7 : 0,
            borderBottomRightRadius: mio ? 0 : 7,
            marginLeft: 8,
          }}>
          <Text
            style={{color: mio ? '#fff' : '#000', margin: 20, lineHeight: 22}}>
            {text}
          </Text>
        </View>
        {masdeuno ? (
          <Text style={[styles.detalle]}>{mio ? 'send' : 'just now'}</Text>
        ) : null}
      </View>
    </View>
  );
};
/* aquie estaran los estilos */
const styles = StyleSheet.create({
  container: {},
  detalle: {
    fontSize: 11,
    color: '#707070',
    marginLeft: 12,
    marginTop: 3,
  },
});
export default Mensaje;
