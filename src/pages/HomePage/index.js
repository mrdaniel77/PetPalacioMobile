import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import * as animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'

export function HomePage(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{width: '70%'}}
                    resizeMode="contain"
                />
            </View>
            <animatable.View delay={500} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Cuide de quem mais te ama ! </Text>
                <Text style={styles.text}>Faça o login:</Text>
                <TouchableOpacity 
                onPress={ ()=> navigation.navigate('Login') }
                style={styles.button}>
                    <Text style={styles.titleButton}>Entrar</Text>
                </TouchableOpacity>
            </animatable.View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center'

    },
    containerForm:{
        flex:1,
        backgroundColor:'#e6e6e6',
        borderTopLeftRadius:45,
        borderTopRightRadius:45,
        paddingStart:'5%',
        paddingEnd:'5%',
        
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        marginTop:28,
        marginBottom: 12,
    },
    text:{
        color:'#a1a1a1',
    },
    button:{
        position:'absolute',
        backgroundColor: '#285a74',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems:'center',
        justifyContent:'center'

    },
    titleButton:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    }

})
