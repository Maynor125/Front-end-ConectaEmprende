import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, IconButton, Button, Avatar, Tooltip, MD3Colors} from 'react-native-paper';
import Iconnavbar from '../components/Iconnavbar';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
function ChatS () {
  const navigation = useNavigation();
  const miChat = () => {
    navigation.navigate('MisChat'); // Navega a la vista 'Screen2'
  };
  const [isLike, setIsLike] = useState(false);
  const [isComent, setIsComet] = useState(false);
  return (
    <>
    <Iconnavbar></Iconnavbar>
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
      <View style={[styles.containera]}>
      <View
        style={[styles.forocontainer]}>
          <Avatar.Image
          size={44}
          style={[styles.img]}
          source={require('../assets/Images/Ellipse4.png')}
        />
        <View>
          <Text variant="titleMedium" style={[styles.forocontainerpar2title]}>Gestion de redes sociales</Text>

    
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
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
                onPress={miChat}
              />
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}></View>
    </View>
    <View style={[styles.containera]}>
      <View
        style={[styles.forocontainer]}>
           <Avatar.Image
          size={44}
          style={[styles.img]}
          source={require('../assets/Images/Ellipse1.png')}
        />
        <View>

   
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
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
                onPress={miChat}
              />
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}/>
    </View>
    <View style={[styles.containera]}>
      <View
        style={[styles.forocontainer]}>
          <Avatar.Image
          size={44}
          style={[styles.img]}
          source={require('../assets/Images/Ellipse3.png')}
        />

        <View>

          <Text variant="titleMedium" style={[styles.forocontainerpar2title]}>Gestion de redes sociales</Text>
        
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
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
                  onPress={() => setIsComet(!isComent)}/>
                <Text>3</Text>
              </View>
            </View>
            <Tooltip title="Selected Camera">
                <View style={[styles.forocontainerpar2icono]}>
              <IconButton
                icon="chevron-right"
                iconColor={MD3Colors.tertiary30}
                size={20}
                onPress={miChat}/>
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}/>
    </View>
    <View style={[styles.containera]}>
      <View
        style={[styles.forocontainer]}>
        <Avatar.Image
          size={44}
          style={[styles.img]}
          source={require('../assets/Images/Ellipse2.png')}
        />
        <View>

          <Text variant="titleMedium" style={[styles.forocontainerpar2title]}>Gestion de redes sociales</Text>
     
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
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
                onPress={miChat}
              />
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}/>
    </View>
    <View style={[styles.containera]}>
      <View
        style={[styles.forocontainer]}>
        <Avatar.Image
          size={44}
          style={[styles.img]}
          source={require('../assets/Images/Ellipse1.png')}></Avatar.Image>
        <View>

          <Text variant="titleMedium" style={[styles.forocontainerpar2title]}>Gestion de redes sociales</Text>
     
          <Text variant='labelLarge' style={[styles.forocontainerpar2description]}>Is there a therapy which can cure crossdressing & bdsm compulsion?</Text>
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
                onPress={miChat}
              />
            </View>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={[styles.liniaseparacion]}></View>
    </View>
      </ScrollView>
      <IconButton
        style={[styles.botonflotante]}
        icon="bookmark"
        iconColor={'#fff'}
        size={40}
        mode='contained'
        onPress={miChat}
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
    bottom: 13,
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

export default ChatS;
