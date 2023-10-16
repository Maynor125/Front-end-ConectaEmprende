import React, { Fragment } from 'react';
import { useController, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { Button, Checkbox, Divider, List, TextInput } from 'react-native-paper';
import FormBuilder from 'react-native-paper-form-builder/dist/FormBuilder';
import { LogicProps } from 'react-native-paper-form-builder/dist/Types/Types';


function Login({ navigation }) {

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: 'checked',
    },
    mode: 'onChange',
  });
  return (
    <Fragment>
      <View style={{ top: '8%', alignSelf: 'center', alignItems: 'center'}}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: '500' }}>Sing in</Text>
        <Text style={{ marginTop: '3%', color: 'black', fontSize: 14, fontWeight: '400' }}>Hi! Welcome back, you ve been missed.</Text>
      </View>
      <View style={{ top: '10%', bottom: '5%', marginRight: '5%', marginLeft: '5%' }}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Email</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'email',
              type: 'email',
              textInputProps: {
                label: 'example@gmail.com',
                left: <TextInput.Icon name={'email'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
            },
          ]}
        />
        <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: '4%' }}>Password</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'password',
              type: 'password',
              textInputProps: {
                label: '*********',
                left: <TextInput.Icon name={'lock'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password should be atleast 8 characters',
                },
                maxLength: {
                  value: 30,
                  message: 'Password should be between 8 and 30 characters',
                },
              },
            },
          ]}
        />
        <Button style={[styles.boton]} theme={{ colors: { primary: '#5A256F' } }} mode="text" onPress={() => navigation.navigate('Recuperacion')}>Forgot password? </Button>
        <Button style={[styles.boton2]} theme={{ colors: { primary: '#5A256F' } }} mode={'contained'} onPress={handleSubmit(console.log)}>
          Sing in
        </Button>
      </View>

      <View style={{ flex: 0.1, bottom: '-15%', width: '80%', alignItems: 'center', alignSelf: 'center' }}>
        <View style={[styles.caja]}>
          <Divider style={[styles.linea1]} /><Text style={[styles.texto]}>Or sign in whit</Text><Divider style={[styles.linea2]} />
        </View>
      </View>

      <View style={[styles.circle]}>
        <Image source={require('../assets/Images/gogle.png')} style={{ alignSelf: 'center' }} />
      </View>

      <View style={[styles.textview]}>
                    <Text style={[styles.textinferior]}>Dont have an account? </Text>
                    <Button theme={{ colors: { primary: 'rgba(74, 37, 99, 1)' } }}  mode="text" onPress={() => navigation.navigate('Registro')}>Sign Up</Button>
                </View>

    </Fragment>
  );
}

function RememberMe(props: LogicProps) {
  const { name, rules, shouldUnregister, defaultValue, control } = props;
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (

    <List.Item
      title={'Remember me'}
      left={() => (
        <Checkbox.Android
          status={field.value}
          onPress={() => {
            field.onChange(field.value === 'checked' ? 'unchecked' : 'checked');
          }}
        />
      )}
    />
  
  );  
  
}
const styles = StyleSheet.create({
  boton: {
    fontSize: 14, fontWeight: '600', alignSelf: 'flex-end'
  },
  boton2: {
    fontSize: 16, fontWeight: '600',
    marginTop: '10%',height: 45
  },
  caja: {
    width: '100%',
    fontFamily: 'Poppins',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
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
    width: 90,
    height: 90,
    borderRadius: 50,
    shadowColor: 'rgba(74, 37, 99, 1)',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,//solo en IOS
    elevation: 16, // Android
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    top: '18%'
  },
  textview: {
    top: '45%',
    width: '100%',
    fontFamily: 'Poppins',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
textinferior: {
  fontSize: 16,
  color: 'rgba(15, 15, 15, 1)',
  fontWeight: '400'

},
});
export default Login;