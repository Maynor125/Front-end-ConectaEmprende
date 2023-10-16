import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { Button, TextInput, PaperProvider, IconButton, MD3Colors } from 'react-native-paper';
import FormBuilder from 'react-native-paper-form-builder/dist/FormBuilder';


function Cperfil({ navigation }) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      number: '',
      gender: '',
      rememberMe: 'checked',
    },
    mode: 'onChange',
  });

  return (
    <PaperProvider>
      <Fragment>
        <View style={{ top: '4%', alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: '500', fontFamily: 'Poppins' }}>Complete your profile</Text>
          <Text style={{ marginTop: '3%', color: 'black', fontSize: 15, fontWeight: '300', lineHeight: 21 }}>Hi! Welcome back, you ve been missed.</Text>
        </View>

        <View style={{ top: '5%'}}>
          <View style={[styles.circle]}>
            <Image source={require('../assets/Images/elton.jpg')} style={{ alignSelf: 'center', width: '100%', height: '100%' }} />
          </View>
          <View style={[styles.sobrecircle]}>
            <IconButton containerColor= '#FFDB13'
              icon="pencil"
              iconColor='white'
              mode={'contained'}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
        <View style={{ top: '4%', bottom: '5%', marginRight: '5%', marginLeft: '5%' }}>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Name</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {

                name: 'name',
                type: 'text',
                textInputProps: {
                  label: 'Eduard Tich',
                  left: <TextInput.Icon name={'account'} />,
                },
                rules: {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                },
              },
            ]}
          />
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: '4%' }}>Phone Number</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                name: 'number',
                type: 'text',
                textInputProps: {
                  label: '12345678',
                  left: <TextInput.Icon name={'email'} />,
                },
                rules: {
                  required: {
                    value: true,
                    message: 'Phone number is required',
                  },
                  minLength: {
                    value: 8,
                    message: 'Number should be atleast 8 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Number should be between 8 and 20 digits',
                  },
                },
              },
            ]}
          />
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: '4%' }}>Gender</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                name: 'gender',
                type: 'select',
                textInputProps: {
                  label: 'Gender',
                  left: <TextInput.Icon name={'account'} />,
                },
                rules: {
                  required: {
                    value: true,
                    message: 'Gender is required',
                  },
                },
                options: [
                  {
                    value: 0,
                    label: 'Female',
                  },
                  {
                    value: 1,
                    label: 'Male',
                  },
                ],
              },
            ]}
          />
          <Button theme={{ colors: { primary: '#5A256F' } }} style={[styles.boton2]} mode={'contained'} onPress={handleSubmit(console.log)}>
            Complete profile
          </Button>
        </View>
      </Fragment>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  boton2: {
    fontSize: 16, fontWeight: '500', fontFamily: 'Ponppins', lineHeight: 24,
    marginTop: '18%', height: 45, textAlign: 'center'
  },
  caja: {
    width: '100%',
    fontFamily: 'Poppins',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  linea1: {
    width: 105,
    height: 1,
    backgroundColor: 'rgba(121, 121, 121, 1)',
  },
  texto: {
    color: 'rgba(121, 121, 121, 1)',
    fontSize: 14,
    fontWeight: '400',
  },
  linea2: {
    width: 105,
    height: 1,
    backgroundColor: 'rgba(121, 121, 121, 1)',
  },
  circle: {
    width: 135,
    height: 135,
    borderRadius: 80,
    shadowColor: 'rgba(74, 37, 99, 1)',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,//solo en IOS
    elevation: 16, // Android
    alignSelf: 'center',
    backgroundColor: '#F0F2F5',
    top: '7%',
    overflow: 'hidden'
  },
  sobrecircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'yellow',
    top: -45,
    right: '-60%',
    justifyContent: 'center',
    alignItems:'center',
  }
});

export default Cperfil;