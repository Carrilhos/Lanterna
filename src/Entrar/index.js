import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import image from '../../img/bg.jpg'

import styles from './styles'
import { AppLoading } from 'expo';

export default function Entrar(){

  

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
               <View style={styles.form}>
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
                   textContentType={'password'}
                   style={styles.input}
                   />
                   <Button
                   title={'Login'}
                   style={styles.submit}
                   color={'#36ffa0'}
                   />

                  
               </View>
            </ImageBackground>
        </View>
        
    )
}

