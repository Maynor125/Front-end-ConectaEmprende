import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';


function  Iconnavbar() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.barrasup]}>
        <View style={[styles.logitotexto]}>
          <Image source={require('../assets/Images/logito.png')} style={{ width: 60, height: 60 }} />
          <Text style={{ color: '#4A2563', fontSize: 19, fontWeight: '700', fontFamily: 'Gurajada' }}>ConectaEmprende</Text>
        </View>
        <View style={[styles.icon]}>
          <IconButton containerColor='#D9D9D9'
            icon="bell"
            iconColor='black'
            mode={'contained'}
            size={30}
            onPress={() => console.log('Campana')}
          />
          <IconButton containerColor='#D9D9D9'
            icon="account"
            iconColor='black'
            mode={'contained'}
            size={30}
            onPress={() => console.log('Usuario')}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    top: '0%',
    marginLeft:'1%',
    marginRight:'1%',
    height: 65,
    display: 'flex',

  },
  barrasup: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logitotexto: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',

  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
export default Iconnavbar;



