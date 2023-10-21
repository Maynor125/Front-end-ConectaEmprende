import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { IconButton, MD3Colors, ProgressBar, Searchbar } from 'react-native-paper';
import Iconnavbar from '../components/Iconnavbar';

function HomeScreen( {}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
    <><Iconnavbar></Iconnavbar>

      <View style={[styles.contain]}>
        <View style={[styles.busqueda]}>
          <Searchbar style={[styles.barrita]}
            iconColor='#5A256F'
            mode='bar'
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery} />
        </View>

        <View style={[styles.icono]}>
          <IconButton
            icon="view-grid"
            iconColor='white'
            size={30}
            onPress={() => console.log('Campana')} />
        </View>
      </View>
      <View style={[styles.catecontainer]}>
        <View style={[styles.textocontainer]}>
          <Text style={[styles.catexto]}>Categories</Text>
          <Text style={[styles.sealltexto]}>See all</Text>
        </View>
        <View style={[styles.iconcontain]}>
          <View style={[styles.textoicono]}>
            <IconButton containerColor='#EBD9F2'
              icon="palette"
              iconColor='#5A256F'
              mode={'contained'}
              size={55}
              onPress={() => console.log('Pressed')}
            />
            <Text style={[styles.textoinferior]}>Arte</Text>
          </View>

          <View style={[styles.textoicono]}>
            <IconButton containerColor='#EBD9F2'
              icon="briefcase-variant"
              iconColor='#5A256F'
              mode={'contained'}
              size={55}
              onPress={() => console.log('Pressed')}
            />
            <Text style={[styles.textoinferior]}>Negocios</Text>
          </View>
          <View style={[styles.textoicono]}>
            <IconButton containerColor='#EBD9F2'
              icon="pencil-ruler"
              iconColor='#5A256F'
              mode={'contained'}
              size={55}
              onPress={() => console.log('Pressed')}
            />
            <Text style={[styles.textoinferior]}>Negocios</Text>
          </View>

          <View style={[styles.textoicono]}>
            <IconButton containerColor='#EBD9F2'
              icon="bullhorn"
              iconColor='#5A256F'
              mode={'contained'}
              size={55}
              onPress={() => console.log('Pressed')}
            />
            <Text style={[styles.textoinferior]}>Marketing</Text>
          </View>
        </View>
      </View>


      <View style={[styles.editaymejora]}>
        <Text style={[styles.estilotexto]}>Edita y mejora tus productos</Text>
        <View style={[styles.division]}>
          <View style={[styles.division1]}>
            <Image source={require('../assets/Images/camisa.png')} style={{ alignSelf: 'center', width: '100%', height: '100%' }} />
          </View>
          <View style={[styles.division2]}>
            <Text style={[styles.divisiontexto]}>Conectaemprende te ofrece una serie de herramientas, que facilitara el mejoramiento de tus productos o artículos de manera visual y te permitira descargarlos.</Text>
            <View style={[styles.diseicon]}>
              <IconButton
                icon="arrow-expand-all"
                iconColor='#5A256F'
                size={30}
                onPress={() => console.log('Pressed')}
              />
              <IconButton
                icon="signature-text"
                iconColor='#5A256F'
                size={30}
                onPress={() => console.log('Pressed')}
              />
              <IconButton
                icon="brush"
                iconColor='#5A256F'
                size={30}
                onPress={() => console.log('Pressed')}
              />
              <IconButton
                icon="attachment"
                iconColor='#5A256F'
                size={30}
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.apredizajec]}>
      <View style={[styles.textocontainer]}>
          <Text style={[styles.catexto]}>Aprendizaje continuo</Text>
          <Text style={[ styles.sealltexto]}>See all</Text>
        </View>
        <View style={[styles.cuadrito]}>
       
        <View style={[styles.cuadroima]}>
            <Image source={require('../assets/Images/cuadrito.png')} style={{ alignSelf: 'center', width: '100%', height: '100%', borderRadius:10, }} />
          </View>
          <View style={[styles.division2]}>
            <Text style={[styles.textofill]}>Negocios</Text>
            <Text style={[styles.textkias]}>Herramientas kias</Text>       
            <Text style={[styles.mefca]}>MEFCCA</Text>  

            <View style={[styles.numero]}> 
            <ProgressBar  style={[styles.progres]} progress={0.4}  color="#5A256F"/>
            <Text style={[styles.numerito]}>13/30</Text> 
            </View>   
          </View> 
          </View>
      </View>    
      </>
  );
}


const styles = StyleSheet.create({
  contain: {
    top: 30,
    height: 70,
    paddingLeft: '4%',
    paddingRight: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
   },
  busqueda: {
    width: '80%',
    height: 50,
  },
  barrita: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5A256F',
    backgroundColor: '#FAFAFA',
  },

  icono: {
    borderRadius: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A256F',
  },
  catecontainer: {
    top: 40,
    height: 170,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textocontainer: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catexto: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  sealltexto: {
    color: '#FFD800',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  iconcontain: {
    top: '3%',
    width: '90%',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
  nombrecontain: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoicono: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',

  },
  textoinferior: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#0F0F0F',
  },
  editaymejora: {
    marginTop: 50,
    height: 210,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  estilotexto: {
    width:'80%',
    height: 40,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  division: {
    top: '1%',
    height: 160,
    flexDirection: 'row',
    width: '90%',
    overflow: 'hidden',
  },
  division1: {
    flexDirection: 'row',
    width: '40%',
    padding: 15,

  },
  division2: {
    flexDirection: 'column',
    width: '60%',
  },
  divisiontexto: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins',
    padding: '4%'
  },
  diseicon: {
    width:'90%',
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  apredizajec:{
    top: 0,
    height: 185,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden',
  },
  cuadrito:{
    width:'90%',
    top: 2,
    height: 130,
    flexDirection: 'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#EBD9F2',
  },
  cuadroima: {
    flexDirection: 'row',
    width: '40%',
    padding: 10,
  },
  cuaprogres:{
    flexDirection: 'row',
    width: '60%',
    padding: 10,
  },
  textofill:{
    fontSize: 12,
    width: 100,
    height:30,
    color:'#FFD800',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Poppins',
    padding: '3%',
    top:10,
    backgroundColor:'#FFF7E6',
    borderRadius:15,
  },
  textkias:{
    height:30,
    top:15,
    color:'black',
    fontSize: 20,
    fontWeight: '400',
  },
  mefca: {
    height:20,
    width:50,
    top:20,
    left: 40,
    color:'#000000',
    fontSize: 8,
    
  },
  numero: {
    top: 10,
    height: 20,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  progres:{
    borderRadius: 15,
    width: 130,
  },
  numerito:{
    width: 35,
    fontSize:8,
    fontWeight:'400',
    color: 'black',
    alignSelf: 'center',
  },
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
  iconcontaini: {
    width: '90%',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
  },
  textoiconoi: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  textoinferiori: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0F0F0F',

  },
});
export default HomeScreen;



