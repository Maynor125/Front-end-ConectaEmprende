import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';

function Welcome({ navigation }) {
    return (
        <View
            style={[styles.container]}>
            <View style={{ flex: 1.5, backgroundColor: 'rgba(240, 242, 245, 1)', borderBottomStartRadius: 80, borderBottomEndRadius: 80, overflow: 'hidden' }}>
                <Image source={require('../assets/Images/cel.png')}
                    style={{ width: 300, height: 617, top: 90, alignSelf: 'center' }}/>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <View style={[styles.textview]}>
                    <Text style={[styles.textnegro]}>Admisnistra tu </Text><Text style={[styles.textlila]}>contenido</Text>
                </View>
                <View style={[styles.textview]}>
                    <Text style={[styles.textlila]}>de forma </Text><Text style={[styles.textnegro]}>facil</Text>
                </View>
                <Text style={[styles.textpequeno]}>App to search and discover the most suitable{"\n"} place for you to stay.</Text>
                <Button style={[styles.boton]} theme={{ colors: { primary: 'rgba(74, 37, 99, 1)' } }}  mode="contained" onPress={() => navigation.navigate('Registro')}> Let's Get Started </Button>
                <View style={[styles.textview]}>
                    <Text style={[styles.textinferior]}>Already have an account? </Text>
                    <Button theme={{ colors: { primary: 'rgba(74, 37, 99, 1)' } }}  mode="text" onPress={() => navigation.navigate('Login')}>Sign In</Button>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    textview: {
        width: '100%',
        fontFamily: 'Poppins',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    textnegro: {
        color: 'black',
        fontSize: 27,
        fontWeight: '600'
    },
    textlila: {
        color: 'rgba(74, 37, 99, 1)',
        fontSize: 27,
        fontWeight: '600'

    },
    textpequeno: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: '6%'
    },
    boton: {
        marginTop: '8%',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        marginBottom: '6%'
    },
    textinferior: {
        fontSize: 16,
        color: 'rgba(15, 15, 15, 1)',
        fontWeight: '400'

    }

});
export default Welcome;
