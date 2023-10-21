import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Tooltip, Avatar, IconButton, MD3Colors} from 'react-native-paper';

export default function Foro({ title,picture,text }){ 

  const  navigation = useNavigation();
  
  const MisChatScreen = ({}) => {
    navigation.navigate('MisChat'); // Navega a la vista 'ChatWelcome'
  };
  /* Estados del ui */
  const [isLike, setIsLike] = useState(false);
  const [isComent, setIsComet] = useState(false);
  /* */
  return (
    <View style={[styles.container]}>
      <View
        style={[styles.forocontainer]}>
        <Avatar.Image
          size={44}
          style={[styles.img]}
          source={picture}
        />
        <View>
          <Text variant="titleMedium" style={[styles.forocontainerpar2title]}>{title}</Text>
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>{text}</Text>
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
                  onPress={() => setIsComet(!isComent)}
                />
                <Text>3</Text>
              </View>
            </View>
            <Tooltip title="Selected Camera">
                <View style={[styles.forocontainerpar2icono]}>
              <IconButton
                icon="chevron-right"
                iconColor={MD3Colors.tertiary30}
                size={20}
                onPress={MisChatScreen}
              />
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}></View>
    </View>
  );
};

/* aquie estaran los estilos */
const styles = StyleSheet.create({
  container: {
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
    width:'74%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
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
  contbtn1:{
    display: 'flex',
    flexDirection: 'row',
  },
  liniaseparacion: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9D8D8',
  },
});
