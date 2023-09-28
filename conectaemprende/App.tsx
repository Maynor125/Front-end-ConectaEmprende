import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import BootSplash from 'react-native-bootsplash';




const App = () => {
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{ flex: 1.5, backgroundColor: 'rgba(240, 242, 245, 1)', borderBottomStartRadius: 80, borderBottomEndRadius: 80, overflow: 'hidden' }}>
        <Image source={require('./cel.png')}
          style={{ width: 300, height: 617, top: 90, alignSelf: 'center' }} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <View style={[styles.textview]}>
          <Text style={[styles.textnegro]}>Admisnistra tu </Text><Text style={[styles.textlila]}>contenido</Text>
          </View>
          <View style={[styles.textview]}>
          <Text style={[styles.textlila]}>de forma </Text><Text style={[styles.textnegro]}>facil</Text>
          </View>
          <Text style={[styles.textpequeno]}>App to search and discover the most suitable{"\n"} place for you to stay.</Text>
         
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }, 
  textview: {
    width: '100%',
    fontFamily: 'Poppins',
    flexDirection: 'row',
    justifyContent: 'center'
  
  },
  textnegro: {
    color: 'black',
    fontSize: 27,
  },
  textlila: {
    color: 'rgba(74, 37, 99, 1)',
    fontSize: 27,
 
  },
  textpequeno: {
   textAlign: 'center',
    fontSize: 14,
    marginTop: 30
  },

});
export default App;
