import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {
  Avatar,
  Card,
  Button,
  FAB,
  Modal,
  Portal,
  PaperProvider,
} from 'react-native-paper';

//configurar idioma
LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
  today: "Hoy'hoy",
};
LocaleConfig.defaultLocale = 'es';

function Eventos() {
  const [selected, setSelected] = useState('');
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.calendary}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'rgba(72, 37, 99, 1)',
                selectedTextColor: 'white',
              },
            }}
          />
          <Card style={styles.cardstyle}>
            <Card.Title
              title = <Text variant="titleMedium">21 de diciembre 2023</Text>
              left={props => (
                <Avatar.Image
                  size={35}
                  source={require('../assets/Images/elton.jpg')}
                />
              )}
            />
            <View style={styles.seperator}></View>
            <Card.Content style={styles.ajust}>
              <Text>
                El dia 21 de octubre de 2023 se realizara el evento del hackaton
              </Text>

              <Button style={styles.ajustButton} mode="contained" onPress={()=><Eventos1/>}>
                Ver eventos de hoy
              </Button>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.CentreObject}>
          <FAB
            color="white"
            icon="plus"
            customSize={65}
            style={styles.fab}
            onPress={showModal}
          />
        </View>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style= {styles.CentreObject}>
 
          <Text variant="titleLarge">Selecciona una fecha</Text>
                     
          </View>

          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'rgba(72, 37, 99, 1)',
                selectedTextColor: 'white',
              },
            }}
          />

          <Button style={styles.ajustButton} mode="contained">
            Continuar
          </Button>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  calendary: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 80,
    marginHorizontal: 10,
  },
  seperator: {
    borderBottomColor: '#F0F2F5',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 1,
  },
  cardstyle: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 15,
    marginHorizontal: 10,
  },
  ajust: {
    marginTop: 15,
  },
  ajustButton: {
    marginTop: 15,
    backgroundColor: 'rgba(72, 37, 99, 1)',
  },
  fab: {
    right: 0,
    bottom: 80,
    borderRadius: 100,
    backgroundColor: 'rgba(72, 37, 99, 1)',
  },
  CentreObject: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Eventos;
