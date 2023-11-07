import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from 'react';
import Iconnavbar from "../components/Iconnavbar";
import { IconButton, MD3Colors } from "react-native-paper";
export default function Biblioteca() {
    return (
        <>
            <Iconnavbar></Iconnavbar>

            <View style={[styles.contenedor1]}>
                <View style={[styles.division0]}>
                    <Text style={[styles.textosup]}>Aprendizaje Continuo</Text>


                    <View style={[styles.division1]}>
                        <View style={[styles.cuadro1]}>
                            <IconButton icon={'video'} size={50} iconColor={'purple'}
                            />

                            <Text style={styles.textoicon}>Videos y tutoriales educativos</Text>

                        </View>
                        <View style={[styles.cuadro2]}>
                        <IconButton icon={'video'} size={50} iconColor={'purple'}
                            />

                            <Text style={styles.textoicon}>Documentos educativos</Text>

                        </View>
                    </View>
                    <View style={[styles.division1]}>
                        <View style={[styles.cuadro3]}>
                        <IconButton icon={'video'} size={50} iconColor={'purple'}
                            />

                            <Text style={styles.textoicon}>Audios y potcast educativos</Text>
                        </View>
                        <View style={[styles.cuadro4]}>
                        <IconButton icon={'video'} size={50} iconColor={'purple'}
                            />

                            <Text style={styles.textoicon}>Articulos y blogs</Text>
                        </View>
                    </View>
                </View>
            </View>

        </>

    )

}

const styles = StyleSheet.create({
    contenedor1: {
        width: '100%',
        height: 600,
        paddingVertical: 20,
        paddingHorizontal: 20,
        display: 'flex',
        backgroundColor:'gray',
  
    },
    division0: {
 
        flexDirection: 'column',
        width: '90%',
        height: 600,
        backgroundColor:'pink',
     
    },
    textosup: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },
    division1: {
        flexDirection: 'row',
        width: '100%',
        height: 300,
    },
    division2: {
        flexDirection: 'row',
        width: '100%',
        height: 300,
    },
    cuadro1: {
        flexDirection:'column',
        
        height: 100,
        width: 100,
        borderWidth:1,
        borderColor: 'gray',
    },
    cuadro2: {
        flexDirection:'column',
        height: 100,
        width: 100,
        alignSelf:'center',
        borderWidth:1,
        borderColor: 'gray',

    },
    cuadro3: {
        flexDirection:'column',
        height: 100,
        width: 100,
        alignSelf:'center',
        borderWidth:1,
        borderColor: 'gray',

    },
    cuadro4: {    
        flexDirection:'column',
        height: 100,
        width: 100,
    },
    textoicon: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        borderWidth:1,
        borderColor: 'gray',
    },

    caja: {
        width: '70%',
    },
    btnenviar: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    fechacont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    fechatext: {
        marginLeft: 60,
    },
});

