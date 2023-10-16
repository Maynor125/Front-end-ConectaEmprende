import React, { Fragment } from 'react';
import { useController, useForm } from 'react-hook-form';
import { Text, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';

import { Button, TextInput, Checkbox, List } from 'react-native-paper';
import FormBuilder from 'react-native-paper-form-builder/dist/FormBuilder';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LogicProps } from 'react-native-paper-form-builder/dist/Types/Types';




function Registro({ navigation }) {

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rpassword: '',
      rememberMe: 'checked',
    },
    mode: 'onChange',
  });

  return (
    <Fragment>
      <View style={{ top: '8%', alignSelf: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: '500' }}>Create Account</Text>
        <Text style={{ marginTop: '3%', color: 'black', fontSize: 14, fontWeight: '400' }}>Hi! Welcome back, you ve been missed.</Text>
      </View>
      <View style={{ top: '12%', bottom: '5%', marginRight: '5%', marginLeft: '5%' }}>
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
        <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: '4%' }}>Confirm Password</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'rpassword',
              type: 'password',
              textInputProps: {
                label: 'Repeat password',
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
            {
              name: 'rememberMe',
              type: 'custom',
              JSX: TermsCheckBox,
            },
          ]}
        />


        <Button theme={{ colors: { primary: '#5A256F' } }} style={[styles.boton2]} mode={'contained'} onPress={() => navigation.navigate('CompletePerfil')}>
          Sing Up
        </Button>
      </View>

      <View style={[styles.textview]}>
        <Text style={[styles.textinferior]}>Already have an account?</Text>
        <Button theme={{ colors: { primary: 'rgba(74, 37, 99, 1)' } }} mode="text" onPress={() => {navigation.navigate('Login'), handleSubmit(console.log)}}>Sign In</Button>
      </View>
    </Fragment>
  );
}

function TermsCheckBox(props: LogicProps) {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  
  const { name, rules, shouldUnregister, defaultValue, control } = props;
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (
    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', top: 10 }}>
      <BouncyCheckbox
        size={25}
        fillColor='#5A256F'
        unfillColor="#FFFFFF"
        text="Agree with "
        iconStyle={{ borderColor: '#5A256F', borderRadius: 2 }}
        innerIconStyle={{ borderRadius: 2, borderWidth: 2 }}
        textStyle={{ textDecorationLine: "none", fontFamily: 'Gothic A1', color: '#0F0F0F', fontSize: 14, fontWeight: '600', lineHeight: 24 }}
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
        isChecked={checkboxState}
        onPress={() => setCheckboxState(!checkboxState)}
      />

      <Text style={{ fontFamily: 'Gothic A1', color: '#4A2563', fontSize: 14, fontWeight: '600', lineHeight: 24 }}>Terms & conditions</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  boton2: {
    fontSize: 16, fontWeight: '600',
    marginTop: '14%', height: 45
  },
  textview: {
    top: '44%',
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
export default Registro;