import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, IconButton, MD3Colors, Text, Tooltip } from 'react-native-paper';
import Iconnavbar from '../components/Iconnavbar';
import { useNavigation } from '@react-navigation/native';


export default function MisChat() {
  const [isLike, setIsLike] = useState(false);
  const [isComent, setIsComet] = useState(false);

  return (
    <> <Iconnavbar/>
      <View style={[styles.container]}>
        <View style={[styles.cabecera]}>
          <IconButton
            icon={'chevron-left'}
            onPress={() => console.log('a')}></IconButton>
          <Text variant="titleLarge">Foros de apredizaje guardados</Text>
        </View>
        <ScrollView>
          <View style={[styles.containera]}>
            <View
              style={[styles.forocontainer]}>
              <Avatar.Image
                size={44}
                style={[styles.img]}
                source={require('../assets/Images/Ellipse4.png')}></Avatar.Image>


              <View>
                <View>
                <Text variant="titleMedium" style={[styles.forocontainerpar2description]} >Gestion de redes sociales</Text>
                <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
                </View>
                <View style={[styles.forocontainerpar2conticonos]}>
                  <View style={[styles.contbtn1]}>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="thumb-up"
                        iconColor={isLike ? '#9B40BF' : '#707070'}
                        size={20}
                        onPress={() => setIsLike(!isLike)}></IconButton>
                      <Text>2</Text>
                    </View>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="comment"
                        iconColor={isComent ? '#FFD800' : '#707070'}
                        size={20}
                        onPress={() => setIsComet(!isComent)}></IconButton>
                      <Text>3</Text>
                    </View>
                  </View>
                  <Tooltip title="Selected Camera">
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="chevron-right"
                        iconColor={MD3Colors.tertiary30}
                        size={20}
                        onPress={() => console.log('a')}></IconButton>
                    </View>
                  </Tooltip>
                </View>
              </View>
            </View>
            <View style={[styles.liniaseparacion]} />
          </View>
          <View style={[styles.containera]}>
            <View
              style={[styles.forocontainer]}>
              <Avatar.Image
                size={44}
                style={[styles.img]}
                source={require('../assets/Images/Ellipse1.png')}></Avatar.Image>
              <View>


                <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
                <View style={[styles.forocontainerpar2conticonos]}>
                  <View style={[styles.contbtn1]}>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="thumb-up"
                        iconColor={isLike ? '#9B40BF' : '#707070'}
                        size={20}
                        onPress={() => setIsLike(!isLike)}></IconButton>
                      <Text>2</Text>
                    </View>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="comment"
                        iconColor={isComent ? '#FFD800' : '#707070'}
                        size={20}
                        onPress={() => setIsComet(!isComent)}></IconButton>
                      <Text>3</Text>
                    </View>
                  </View>
                  <Tooltip title="Selected Camera">
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="chevron-right"
                        iconColor={MD3Colors.tertiary30}
                        size={20}
                        onPress={() => console.log('a')}></IconButton>
                    </View>
                  </Tooltip>
                </View>
              </View>
            </View>
            <View style={[styles.liniaseparacion]} />
          </View>
          <View style={[styles.containera]}>
            <View
              style={[styles.forocontainer]}>
              <Avatar.Image
                size={44}
                style={[styles.img]}
                source={require('../assets/Images/Ellipse3.png')}></Avatar.Image>

              <View>
              <View>
                <Text variant="titleMedium" style={[styles.forocontainerpar2description]} >Gestion de redes sociales</Text>
                <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
                </View>
                <View style={[styles.forocontainerpar2conticonos]}>
                  <View style={[styles.contbtn1]}>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="thumb-up"
                        iconColor={isLike ? '#9B40BF' : '#707070'}
                        size={20}
                        onPress={() => setIsLike(!isLike)}
                      />
                      <Text>2</Text>
                    </View>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="comment"
                        iconColor={isComent ? '#FFD800' : '#707070'}
                        size={20}
                        onPress={() => setIsComet(!isComent)}></IconButton>
                      <Text>3</Text>
                    </View>
                  </View>
                  <Tooltip title="Selected Camera">
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="chevron-right"
                        iconColor={MD3Colors.tertiary30}
                        size={20}
                        onPress={() => console.log('a')}></IconButton>
                    </View>
                  </Tooltip>
                </View>
              </View>
            </View>
            <View style={[styles.liniaseparacion]} />
          </View>
          <View style={[styles.containera]}>
            <View
              style={[styles.forocontainer]}>
              <Avatar.Image
                size={44}
                style={[styles.img]}
                source={require('../assets/Images/Ellipse2.png')}></Avatar.Image>

              <View>
              <View>
                <Text variant="titleMedium" style={[styles.forocontainerpar2description]} >Gestion de redes sociales</Text>
                <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
                </View>
                <View style={[styles.forocontainerpar2conticonos]}>
                  <View style={[styles.contbtn1]}>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="thumb-up"
                        iconColor={isLike ? '#9B40BF' : '#707070'}
                        size={20}
                        onPress={() => setIsLike(!isLike)}></IconButton>
                      <Text>2</Text>
                    </View>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="comment"
                        iconColor={isComent ? '#FFD800' : '#707070'}
                        size={20}
                        onPress={() => setIsComet(!isComent)}></IconButton>
                      <Text>3</Text>
                    </View>
                  </View>
                  <Tooltip title="Selected Camera">
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="chevron-right"
                        iconColor={MD3Colors.tertiary30}
                        size={20}
                        onPress={() => console.log('a')}></IconButton>
                    </View>
                  </Tooltip>
                </View>
              </View>
            </View>
            <View style={[styles.liniaseparacion]} />
          </View>
          <View style={[styles.containera]}>
            <View
              style={[styles.forocontainer]}>
              <Avatar.Image
                size={44}
                style={[styles.img]}
                source={require('../assets/Images/Ellipse1.png')}></Avatar.Image>


              <View>
              <View>
                <Text variant="titleMedium" style={[styles.forocontainerpar2description]} >Gestion de redes sociales</Text>
                <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
                </View>
                <View style={[styles.forocontainerpar2conticonos]}>
                  <View style={[styles.contbtn1]}>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="thumb-up"
                        iconColor={isLike ? '#9B40BF' : '#707070'}
                        size={20}
                        onPress={() => setIsLike(!isLike)}></IconButton>
                      <Text>2</Text>
                    </View>
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="comment"
                        iconColor={isComent ? '#FFD800' : '#707070'}
                        size={20}
                        onPress={() => setIsComet(!isComent)}></IconButton>
                      <Text>3</Text>
                    </View>
                  </View>
                  <Tooltip title="Selected Camera">
                    <View style={[styles.forocontainerpar2icono]}>
                      <IconButton
                        icon="chevron-right"
                        iconColor={MD3Colors.tertiary30}
                        size={20}
                        onPress={() => console.log('a')}></IconButton>
                    </View>
                  </Tooltip>
                </View>
              </View>
            </View>
            <View style={[styles.liniaseparacion]} />
          </View>
        </ScrollView>
        <IconButton
          style={[styles.botonflotante]}
          icon="plus"
          iconColor={'#fff'}
          size={40}
          mode='contained'
          onPress={() => console.log('a')}></IconButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
  },
  containera: {
    backgroundColor: 'white',
    width: '100%',
    padding: 5,
  },
  forocontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
  },
  forocontainerpar2title: {
    color: '#573926',
  },
  forocontainerpar2description: {
    width: '80%',
  },
  forocontainerpar2conticonos: {
    width: '74%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    marginRight: 12,
  },
  forocontainerpar2icono: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  contbtn1: {
    display: 'flex',
    flexDirection: 'row',
  },
  liniaseparacion: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9D8D8',
  }
});
