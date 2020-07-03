import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import image from '../../img/bg4.jpg'

import styles from './styles'
import { AppLoading } from 'expo';

export default function Entrar(){

  

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
               <Text style={styles.cadastrese}>
                   Cadastre-se!
               </Text>
               <View style={styles.formcadastro}>

                <TextInput
                    placeholder={'Whatsapp'}
                    placeholderTextColor={'#000'}
                    dataDetectorTypes={'phoneNumber'}
                    keyboardType={'number-pad'}
                    textContentType={'telephoneNumber'}
                    style={styles.input}
                />
                <TextInput
                   placeholder={'Senha'}
                   placeholderTextColor={'#000'}
                   secureTextEntry={true}
                   textContentType={"password"}
                   style={styles.input}
                />
                <TextInput
                   placeholder={'Senha'}
                   placeholderTextColor={'#000'}
                   secureTextEntry={true}
                   textContentType={'password'}
                   style={styles.input}
                />
                <TextInput
                   placeholder={'Nome'}
                   placeholderTextColor={'#000'}
                   textContentType={'name'}
                   style={styles.input}
                />

<               Button
                   title={'Cadastrar'}
                   style={styles.submit}
                   color={'#36ffa0'}
                />
                </View>

            </ImageBackground>
        </View>
        
    )
}

